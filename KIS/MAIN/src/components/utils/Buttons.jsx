import { Link } from "react-router-dom"

export function PrimaryButton({path, children, className = "", ...props }) {
    return (
        <>
         <Link to={path} className="link">
        <button className={`kis-button ${className}`.trim()} {...props}>
            {children}
        </button>
        </Link>
        </>
    )
}

export function OutlineButton({ path, children, className = "", ...props }) {
    return (
        <>
        <Link to={path} className="link">
        <button className={`kis-button kis-button-outline ${className}`.trim()} {...props}>
            {children}
        </button>
        </Link>
        </>
    )
}
