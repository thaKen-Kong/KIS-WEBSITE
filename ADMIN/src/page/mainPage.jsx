import { useEffect } from "react"
import { useSession } from "./admin"
import { Navigate, Outlet, useNavigate } from "react-router-dom"
import { SidePanel } from "../component/SidePanel"
import { MainPanel } from "../component/MainPanel"
import { supabase } from "../data/supabase"
import { HeaderContainer } from "../component/Container"


export function MainPage() {

    const {session, setSession} = useSession()
    const navigate = useNavigate()


    async function fetchSession() {
        const {data, error} = await supabase.auth.getSession()
        setSession(data)
    }

    useEffect(()=>{
        fetchSession()
        if (!session) {
            navigate('/admin')
            return
        }

    }, [])

    return (
        <>
            <div className="panel-layout">
                <SidePanel />
                <MainPanel> 
                    <Outlet />
                </MainPanel>
            </div>
        </>
    )
}