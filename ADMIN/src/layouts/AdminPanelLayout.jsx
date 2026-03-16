import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { SidePanel } from "../components/SidePanel"
import { MainPanel } from "../components/MainPanel"
import { supabase } from "../data/supabase"
import { useSession } from "../contexts/SessionContext"


export function AdminPanelLayout() {

    const {session, setSession} = useSession()
    const navigate = useNavigate()


    useEffect(() => {
        let isMounted = true

        const fetchSession = async () => {
            const {data} = await supabase.auth.getSession()
            if (!isMounted) return
            setSession(data.session)
            if (!data.session) {
                navigate('/admin')
            }
        }

        fetchSession()

        return () => {
            isMounted = false
        }
    }, [navigate, setSession])

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
