import { Link } from "react-router-dom"


const navData = [
    {label : "Dashboard", path : "/admin/panel-ui/dashboard"},
    {label : "News", path : "/admin/panel-ui/news"},
    {label : "Events", path : "/admin/panel-ui/events"},
    {label : "Announcement", path : "/admin/panel-ui/announcement"},
]

export function SidePanel() {
    return(
        <>
            <div className="side-panel">
                <div className="nav-container">
                    <ul>
                        {navData.map((item, key)=> {
                            return (<li><Link to={item.path} key={key}>{item.label}</Link></li>)
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}