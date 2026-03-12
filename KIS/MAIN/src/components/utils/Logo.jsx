import { Link } from "react-router-dom";


export function Logo() {
    return (
        <>
        <Link to="/" className="logo-link">
            <div className="logo-section">
                <img src="/src/assets/images/logo/logo.png" alt="" />
                <h2>KAYTITINGA INTEGRATED SCHOOL</h2>
            </div>
        </Link>
        </>
    )
}
