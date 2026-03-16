import { Container } from "../../components/utils/Container";
import { BannerCard } from "../../components/utils/BannerCard";
import { StrandTracks } from "../../components/utils/StrandTracks";
import { OutlineButton, PrimaryButton } from "../../components/utils/Buttons";
import { Link } from "react-router-dom";

export function GlanceSection() {
    return (
        <>
            <section className="glance-section">
                <div className="glance-inner">
                    <div className="glance-title">
                        <span>SCHOOL AT A GLANCE</span>
                    </div>
                    <Container className="glance-container">
                        <div className="glance-block">
                            <div className="glance-block-title">
                                <span>Programs Offered</span>
                            </div>
                        <div className="glance-programs">
                            <BannerCard
                                title="JHS"
                                subtitle="Junior High School focuses on core skills, discipline, and active learning."
                            />
                            <BannerCard
                                title="SHS"
                                subtitle="Senior High School prepares students for college and careers."
                            >
                                <StrandTracks tracks={["STEM", "ABM", "HUMMS", "TVL"]} />
                            </BannerCard>
                                <OutlineButton path="life">
                                    Show More
                                </OutlineButton>
                        </div>
                        </div>
                        <div className="glance-block">
                            <div className="glance-block-title">
                                <span>School Location</span>
                            </div>
                        <div className="glance-map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.478008110162!2d120.82551207403552!3d14.107963188950036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd9df05e2ad96b%3A0x3670ac889eae7301!2sKaytitinga%20Integrated%20School!5e0!3m2!1sen!2sph!4v1773239524582!5m2!1sen!2sph"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Kaytitinga Integrated School Map"
                                className="map"
                            ></iframe>
                        </div>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    )
}
