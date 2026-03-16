import { useState } from "react"
import { HeaderLabel } from "./Label"
import { supabase } from "../data/supabase"

export function RegisterForm() {
    const [displayName, setDisplayName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)
        const {data, error} = await supabase.auth.signUp({displayName, email, password})
        if (error) console.log(error);
        setLoading(false)
    }

    return (
        <>
            <section className="type-form">
                <HeaderLabel text="BE AN ADMIN"/>
                <div className="form">
                    <h3>CREATE AN ACCOUNT</h3>
                    <form action="" onSubmit={handleSubmit}>
                        <input type="text" className="input-field" required placeholder="Enter User Name" value={displayName} onChange={(e) => setDisplayName(e.target.value)}/>
                        <input type="email" className="input-field" required placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <input type="password" className="input-field" required placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <button>{loading ? "CREATING.." : "REGISTER"}</button>
                    </form>
                </div>
            </section>
        </>
    )
}