import { useState } from "react"
import { HeaderLabel } from "./Label"
import { supabase } from "../data/supabase"
import { useSession } from "../contexts/SessionContext"

export function LoginForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")


    const {setSession} = useSession()

    async function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)
        setErrorMessage("")
        const {data, error} = await supabase.auth.signInWithPassword({email, password})
        if (error) {
            setErrorMessage("Invalid email or password.")
            setLoading(false)
            return
        }
        setSession(data.session)
        setLoading(false)
    }

    return (
        <>
            <section className="type-form">
                <HeaderLabel text="LOGIN AS ADMIN"/>
                <div className="form">
                    <h3>LOG IN TO ACCOUNT</h3>
                    <form action="" onSubmit={handleSubmit}>
                        <input type="email" className="input-field" required placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <input type="password" className="input-field" required placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        {errorMessage ? <p className="form-error">{errorMessage}</p> : null}
                        <button>{loading ? "LOGGING IN.." : "LOG IN"}</button>
                    </form>
                </div>
            </section>
        </>
    )
}
