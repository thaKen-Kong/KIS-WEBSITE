import { OutlineButton, PrimaryButton } from "../../components/utils/Buttons";
import { ColumnContainer, Container, LinedLabel, TwoColumnContainer } from "../../components/utils/Container";

export function OverviewSection() {
    return (
        <>
            <section className="overview-section">
                <div className="overview-inner">
                    <div className="overview-title">
                        <span>OVERVIEW</span>
                    </div>
                    <img src="https://www.facebook.com/photo/?fbid=1227860212818066&set=pcb.1227861626151258" />
                    <ColumnContainer className="overview-video">
                        <LinedLabel text="FEATURED VIDEO" />
                        <iframe
                            src="https://www.youtube.com/embed/SJTpYdrAVfM?si=__hwBZWvhjJGVkve"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="video"
                    ></iframe>
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
