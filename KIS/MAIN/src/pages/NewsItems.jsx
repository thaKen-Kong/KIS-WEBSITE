import { useParams } from "react-router-dom"
import { ColumnContainer, Container } from "../components/utils/Container"
import { useEffect, useState } from "react"
import { getIndividualNews } from "../client/newsApi"
import { bg1 } from "../assets/images/images"

export function NewsItem() {
    const [newsDetail, setNewsDetail] = useState(null)

    const {slug} = useParams()
    const rawDate = newsDetail?.date || newsDetail?.created_at
    const formattedDate = rawDate ? new Date(rawDate).toLocaleDateString() : ""

    useEffect(()=>{
        if (!slug) return;
        getIndividualNews(slug).then(news => setNewsDetail(news))
    }, [slug])

    
    return (
        <>
            <section className="news-item-container">
                <ColumnContainer>
                    <header className="news-item-header">
                        <h1 className="news-item-title">{newsDetail?.title || "News"}</h1>
                        <p className="news-item-date">{formattedDate}</p>
                    </header>
                    <div className="image-container">
                        <img src={newsDetail?.image || bg1} alt={newsDetail?.title || "News image"} />
                    </div>
                    <div className="news-item-content">
                        {newsDetail?.content || ""}
                    </div>
                </ColumnContainer>
            </section>
        </>
    )
}
