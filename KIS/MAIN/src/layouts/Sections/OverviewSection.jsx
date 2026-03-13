import { OutlineButton, PrimaryButton } from "../../components/utils/Buttons";
import { ColumnContainer, Container, LinedLabel } from "../../components/utils/Container";

export function OverviewSection() {
    return (
        <>
            <section className="overview-section">
                <div className="overview-inner">
                    <div className="overview-title">
                        <span>OVERVIEW</span>
                    </div>
                    <ColumnContainer className="overview-video">
                        <LinedLabel text="FEATURED VIDEO" />
                       <Container>
                         <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/SJTpYdrAVfM?si=__hwBZWvhjJGVkve"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="video"
                    ></iframe>
                    
                       </Container>
                    </ColumnContainer>
                    
                    <Container className="overview-container">
                        <div className="overview-card">
                            <div className="overview-card-title">
                                <span>About KIS</span>
                            </div>
                            <p>
                                Kaytitinga Integrated School provides a safe, supportive learning
                                environment that builds strong foundations in academics and character.
                            </p>
                            <OutlineButton path="about">Read More</OutlineButton>
                        </div>
                        <div className="overview-card">
                            <div className="overview-card-title">
                                <span>Join Us</span>
                            </div>
                            <p>
                                Join KIS for dedicated teachers, active student programs, and a campus
                                community that helps learners grow with confidence.
                            </p>
                            <PrimaryButton path="admission/why-choose-us">Join Us</PrimaryButton>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    )
}
