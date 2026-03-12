import { Container } from "../../components/utils/Container";

export function OverviewSection() {
    return (
        <>
            <section className="overview-section">
                <div className="overview-inner">
                    <div className="overview-title">
                        <span>OVERVIEW</span>
                    </div>
                    <Container className="overview-container">
                        <div className="overview-card">
                            <div className="overview-card-title">
                                <span>About KIS</span>
                            </div>
                            <p>
                                Kaytitinga Integrated School provides a safe, supportive learning
                                environment that builds strong foundations in academics and character.
                            </p>
                            <button className="overview-button" type="button">Show More</button>
                        </div>
                        <div className="overview-card">
                            <div className="overview-card-title">
                                <span>Join Us</span>
                            </div>
                            <p>
                                Join KIS for dedicated teachers, active student programs, and a campus
                                community that helps learners grow with confidence.
                            </p>
                            <button className="overview-button" type="button">Show More</button>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    )
}
