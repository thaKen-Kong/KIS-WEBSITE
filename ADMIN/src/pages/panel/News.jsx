import { useEffect, useState } from "react";
import { AddContent, Item } from "../../components/AddContent";
import { Container, HeaderContainer } from "../../components/Container";
import { HeaderLabel } from "../../components/Label";
import { useModal } from "../../components/Modal";
import { supabase } from "../../data/supabase";

export function News() {
    const {shown, setShown} = useModal()
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        let isMounted = true

        const fetchNews = async () => {
            setLoading(true)
            setError("")
            const { data, error } = await supabase
                .from("news")
                .select("*")
                .order("date", { ascending: false })

            if (!isMounted) return
            if (error) {
                setError("Failed to load news.")
                setItems([])
            } else {
                setItems(data || [])
            }
            setLoading(false)
        }

        fetchNews()

        return () => {
            isMounted = false
        }
    }, [])

    return(
        <>
            <HeaderContainer>
                <button onClick={()=> {setShown(true)}} className="button-white">ADD</button>
            </HeaderContainer>
            <Container>
                <HeaderLabel text="NEWS LIST" className="green"/>
                <AddContent>
                    {loading ? <div className="table-row"><div className="table-cell">...</div><div className="table-cell">Loading</div><div className="table-cell">...</div></div> : null}
                    {error ? <div className="table-row"><div className="table-cell">!</div><div className="table-cell">{error}</div><div className="table-cell">-</div></div> : null}
                    {!loading && !error && items.length === 0 ? (
                        <div className="table-row">
                            <div className="table-cell">-</div>
                            <div className="table-cell">No news yet</div>
                            <div className="table-cell">-</div>
                        </div>
                    ) : null}
                    {items.map((item, index) => (
                        <Item key={item.id || item.slug || index} id={index + 1} title={item.title} date={item.date || item.created_at} />
                    ))}
                </AddContent>
            </Container>
        </>
    )
}
