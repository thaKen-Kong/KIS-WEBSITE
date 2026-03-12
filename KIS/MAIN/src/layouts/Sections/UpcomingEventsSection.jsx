import { PrimaryButton } from "../../components/utils/Buttons";
import { EventCard } from "../../components/utils/EventCard";
import heroBg from "../../assets/images/bg_1.jpg";

export function UpcomingEventsSection() {
    return (
        <>
            <section className="news-section upcoming-events">
                <div className="news-inner">
                    <div className="news-title">
                        <span>UPCOMING EVENTS</span>
                    </div>
                    <div className="events-list">

                    </div>
                    <p className="news-subtitle">Top three events this month</p>
                    <div className="news-actions">
                        <PrimaryButton type="button">View All Events</PrimaryButton>
                    </div>
                    <div className="news-divider" aria-hidden="true"></div>
                </div>
            </section>
        </>
    )
}
