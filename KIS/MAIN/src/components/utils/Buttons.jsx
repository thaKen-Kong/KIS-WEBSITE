export function PrimaryButton({ children, className = "", ...props }) {
    return (
        <button className={`kis-button ${className}`.trim()} {...props}>
            {children}
        </button>
    )
}

export function OutlineButton({ children, className = "", ...props }) {
    return (
        <button className={`kis-button kis-button-outline ${className}`.trim()} {...props}>
            {children}
        </button>
    )
}
