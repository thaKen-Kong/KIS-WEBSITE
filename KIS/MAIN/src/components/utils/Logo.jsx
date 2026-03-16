import { Link } from "react-router-dom";
import { logo } from "../../assets/images/images";


export function Logo() {
    return (
        <>
        <Link to="/" className="logo-link">
            <div className="logo-section">
                <img src={logo} alt="" />
                <h2>KAYTITINGA INTEGRATED SCHOOL</h2>
            </div>
        </Link>
        </>
    )
}
