export function Container( {children }) {
    return(
        <>
            <section className="container">
                {children}
            </section>  
        </>
    )
}

export function HeaderContainer( {children} ) {
    return (
        <>
            <section className="header-container">
                {children}
            </section>
        </>
    )
}