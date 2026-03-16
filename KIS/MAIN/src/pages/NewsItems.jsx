import { useParams } from "react-router-dom"
import { HeaderSection } from "../layouts/Sections/HeaderSection"
import { ColumnContainer, Container, LinedLabel, MultiLinedLabel } from "../components/utils/Container"
import { useEffect, useState } from "react"
import { getIndividualNews } from "../client/newsApi"
import { bg1 } from "../assets/images/images"

export function NewsItem() {
    const [newsDetail, setNewsDetail] = useState(null)

    const {slug} = useParams()

    useEffect(()=>{
        if (!slug) return;
        getIndividualNews(slug).then(news => setNewsDetail(news))
    }, [newsDetail])

    
    return (
        <>
            <section className="news-item-container">
                <ColumnContainer>
                    <MultiLinedLabel className="enlarged" text={newsDetail?.title} />
                    <div className="image-container">
                        <img src={bg1} alt="" />
                    </div>
                </ColumnContainer>
            </section>
        </>
    )
}
