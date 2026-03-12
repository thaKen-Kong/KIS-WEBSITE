import { Container } from "../../components/utils/Container";
import { Card } from "../../components/utils/Card";
import { PrimaryButton } from "../../components/utils/Buttons";
import heroBg from "../../assets/images/bg_1.jpg";
import { getNews } from "../../client/newsApi";
import { useEffect, useState } from "react";

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
                    <Container className="news-container">
                        <Card title={newsList} />
                    </Container>
                    <p className="news-subtitle">Top three news today</p>
                    <div className="news-actions">
                        <PrimaryButton type="button">View All News</PrimaryButton>
                    </div>
                    <div className="news-divider" aria-hidden="true"></div>
                </div>
            </section>
        </>
    )
}
