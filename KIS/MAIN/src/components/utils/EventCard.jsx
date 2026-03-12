export function EventCard({ title, date, description, image, className = "" }) {
    return (
        <div className={`event-card ${className}`.trim()}>
            {image && <img className="event-card-image" src={image} alt={title || "Event"} />}
            
            <div className="event-card-body">
                <h3 className="event-card-title">{title}</h3>
                <p className="event-card-text">{description}</p>
                <div className="event-card-date">{date}</div>
            </div>
        </div>
    )
}
