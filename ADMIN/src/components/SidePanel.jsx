import { Link } from "react-router-dom"
import logo from "../assets/logo.png"


const navData = [
    {label : "Home", path : "/admin/panel-ui/home"},
    {label : "Dashboard", path : "/admin/panel-ui/dashboard"},
    {label : "News", path : "/admin/panel-ui/news"},
    {label : "Events", path : "/admin/panel-ui/events"},
    {label : "Announcement", path : "/admin/panel-ui/announcement"},
]

export function SidePanel() {
    return(
        <>
            <div className="side-panel">
                <Link className="side-logo" to="/admin/panel-ui/home" aria-label="Go to home">
                    <img src={logo} alt="KIS logo" />
                    <span>KIS Admin</span>
                </Link>
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
