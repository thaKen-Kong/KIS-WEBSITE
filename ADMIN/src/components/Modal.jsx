import { supabase } from "../data/supabase";
import { HeaderLabel } from "./Label";
import { createContext, useContext, useState } from "react";

const ModalContext = createContext()

export function AddModalProvider( {children}) {
    const [show, setShown] = useState(false)

    const [file, setFile] = useState(null);
    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const [content, setContent] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [slug, setSlug] = useState("")

    const [saving, setSaving] = useState(false)
    const [uploading, setUploading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    function handleFileChange(e) {
        setFile(e.target.files[0])
    }

    async function uploadImage() {
        if (!file) {
            setErrorMessage("Please चुनan image file.")
            return ""
        }

        const fileName = `${Date.now()}-${file.name}`

        setUploading(true)
        setErrorMessage("")
        const {data, error} = await supabase.storage.from("images").upload(fileName, file, {
            cacheControl: "3600",
            upsert: true,
        })

        if (error) {
            console.error('Upload error:', error);
            setErrorMessage("Image upload failed. Please try again.")
            setUploading(false)
            return ""
        }

        const {data : urlData, error: urlError} = supabase.storage.from('images').getPublicUrl(data.path)
        
        const publicUrl = urlData?.publicUrl || ""
        if (publicUrl) {
          setImageUrl(publicUrl)
        }
        setUploading(false)
        return publicUrl
    }

    async function handleSubmit(e) {
        e.preventDefault()
        setSaving(true)
        setErrorMessage("")

        const finalImageUrl = imageUrl || (file ? await uploadImage() : "")
        if (!finalImageUrl) {
            setErrorMessage("Please upload an image before saving.")
            setSaving(false)
            return
        }

        const payload = {
            title : title,
            date : date,
            content : content,
            image : finalImageUrl,
            slug : slug
        }

        const {error} = await supabase.from("news").insert([payload])
        if (error) {
            console.error("Insert error:", error)
            setErrorMessage("Saving failed. Please try again.")
            setSaving(false)
            return
        }
        setSaving(false)
    }

    function createSlug(word) {
        setSlug(word.toLowerCase().split(" ").join("-"))
    }


  return (
    <>
    <ModalContext.Provider value = {{show, setShown}}>
    <section className={`modal-screen ${show ? 'shown' : 'hidden'}`}>
      <div className="modal-container">
        <button onClick={()=> {setShown(false)}} className="close-btn">X</button>

        <HeaderLabel className="green" text="ADD ITEM" />

        <form className="modal-form" onSubmit={handleSubmit}>
          <label>
            Title
            <input value={title} onChange={e => {setTitle(e.target.value); createSlug(e.target.value)}} type="text" placeholder="Enter title" required/>
          </label>

          <label>
            Date
            <input value={date} onChange={e => setDate(e.target.value)} type="date" required/>
          </label>

          <label>
            Image
            <input type="file" accept="image/*" onChange={handleFileChange}/>
            <button type="button" className="submit-btn" onClick={uploadImage}>
              {uploading ? "UPLOADING..." : "Upload Image"}
            </button>
          </label>

          <label>
            Content
            <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Enter content..." required rows={4}></textarea>
          </label>

          {errorMessage ? <p className="form-error">{errorMessage}</p> : null}
          <button type="submit" className="submit-btn">
            {saving ? "SAVING..." : "Add Item"}
          </button>
        </form>
      </div>
    </section>
    {children}
    </ModalContext.Provider>
    </>
  )
}

export function useModal() {
    return useContext(ModalContext)
}
