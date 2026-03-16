import { Container } from "../../components/utils/Container";
import { Card, NewsCard } from "../../components/utils/Card";
import { PrimaryButton } from "../../components/utils/Buttons";
import heroBg from "../../assets/images/bg/bg_1.jpg";
import { getNews } from "../../client/newsApi";
import { useEffect, useState } from "react";
import { Loading } from "../../components/utils/Loading";

const data = [
    {title : "ken"},
    {title : ""},
    {title : ""},
    {title : ""}
]

export function NewsSection() {
    
    const [newsList, setNewsList] = useState([])

    useEffect(() => {
        getNews().then(news => {setNewsList(news)})
        return (() => {})
    }, [])

    return (
        <>
            <section className="news-section">
                <div className="news-inner">
                    <div className="news-title">
                        <span>NEWEST NEWS</span>
                    </div>
                    <p className="news-subtitle">LATEST NEWS AT KAYTITINGA INTEGRATED SCHOOL</p>
                    <Container className="news-container">
                        {newsList.length === 0 ? (<Loading />) : newsList.slice(0,3).map((item, key) => { console.log(item); return (<NewsCard content={item} key={key} />)})}
                    </Container>
                    
                    <div className="news-actions">
                        <PrimaryButton type="button" path="what-is-new/news">View All News</PrimaryButton>
                    </div>
                    <div className="news-divider" aria-hidden="true"></div>
                </div>
            </section>
        </>
    )
}
