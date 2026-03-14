import { supabase } from "../data/supabase";
import { HeaderLabel } from "./Label";
import { Children, createContext, useContext, useEffect, useState } from "react";

const ModalContext = createContext()

export function AddModalProvider( {children}) {
    const [show, setShown] = useState(false)

    const [file, setFile] = useState(null);
    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const [content, setContent] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [slug, setSlug] = useState("")

    const [itemData, setItemData] = useState(null)

    function handleFileChange(e) {
        setFile(e.target.files[0])
    }

    async function uploadImage() {
        if (!file) {
            return
        }

        const fileName = `${Date.now()}-${file.name}`

        const {data, error} = await supabase.storage.from("images").upload(fileName, file)

        if (error) {
            console.error('Upload error:', error);
            return;
        }

        const {data : urlData, error: urlError} = supabase.storage.from('images').getPublicUrl(data.path)
        
        if (!urlData.publicUrl === "") {
          setImageUrl(urlData.publicUrl)
        }
    }

    

    function handleSubmit(e) {
        e.preventDefault()

        setItemData({
            title : title,
            date : date,
            content : content,
            image : imageUrl,
            slug : slug
        })

        if (itemData) {
            postData()
            console.log(itemData)
        }
    }

    async function postData() {
        const {data, error} = await supabase.from("news").insert([itemData])
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
            <button className="submit-btn" onClick={uploadImage}>Upload Image</button>
          </label>

          <label>
            Content
            <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Enter content..." required rows={4}></textarea>
          </label>

          <button type="submit" className="submit-btn">Add Item</button>
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