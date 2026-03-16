import { AddModalProvider } from "./Modal";

export function MainPanel( {children} ) {
    return(
        <>
        <AddModalProvider>
            <div className="main-panel">
                {children}
            </div>
        </AddModalProvider>
        </>
    )
}