import { createContext, useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';


const PageContext = createContext()


export function PageProvider( {children} ) {
    const [session, setSession] = useState(null)

    return(
        <>
            <PageContext.Provider value = {{session, setSession}}>
                {children}
            </PageContext.Provider>
        </>
    )
}

export function useSession() {
    return useContext(PageContext)
};