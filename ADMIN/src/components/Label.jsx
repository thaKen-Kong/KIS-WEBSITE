export function HeaderLabel({text, className = ""}) {
    return (
        <>
            <div className={`lined-label ${className}`.trim()}>
                <span>{text}</span>
            </div>
        </>
    )
}