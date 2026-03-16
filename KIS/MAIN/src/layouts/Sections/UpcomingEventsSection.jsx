import { PrimaryButton } from "../../components/utils/Buttons";
import { EventCard } from "../../components/utils/EventCard";
import heroBg from "../../assets/images/bg/bg_1.jpg";
import { useEffect, useState } from "react";
import { Loading } from "../../components/utils/Loading";
import { getEvents } from "../../client/newsApi";

export function UpcomingEventsSection() {

    const [eventsList, setEventsList] = useState([])

    useEffect(() => {
        getEvents().then(news => {setEventsList(news)})
        return (() => {})
    }, [])

    return (
        <>
            <section className="news-section upcoming-events">
                <div className="news-inner">
                    <div className="news-title">
                        <span>UPCOMING EVENTS</span>
                    </div>
                    <div className="events-list">
                        {eventsList.length === 0 ? (<Loading />) : eventsList.slice(0,3).map((item, key) => { return (<EventCard {...item} key={key} />)})}
                    </div>
                    <p className="news-subtitle">Top three events this month</p>
                    <div className="news-actions">
                        <PrimaryButton type="button" path="what-is-new/events">View All Events</PrimaryButton>
                    </div>
                    <div className="news-divider" aria-hidden="true"></div>
                </div>
            </section>
        </>
    )
}
