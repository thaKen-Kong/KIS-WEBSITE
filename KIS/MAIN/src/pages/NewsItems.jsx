import { useParams } from "react-router-dom"

export function NewsItem() {
    
    const {slug} = useParams()
    
    return (
        <>
            <p>{slug}</p>
        </>
    )
}