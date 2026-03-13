import { Children } from "react";

export function Container({ children, className = "" }) {
    return (
        <div className={`horizontal-container ${className}`.trim()}>
            {children}
        </div>
    )
}

export function PageContainer({ children, className = "" }) {
    return (
        <div className={`page-container ${className}`.trim()}>
            {children}
        </div>
    )
}

export function InteractContainer({ children, className = "" }) {
    return (
        <div className={`interact-container ${className}`.trim()}>
            {children}
        </div>
    )
}

export function TwoColumnContainer({
    leftTitle,
    rightTitle,
    leftContent,
    rightContent,
    className = "",
}) {
    return (
        <div className={`two-column-container ${className}`.trim()}>
            <div className="two-column-card">
                {leftTitle && <h3 className="two-column-title">{leftTitle}</h3>}
                <div className="two-column-body">{leftContent}</div>
            </div>
            <div className="two-column-card">
                {rightTitle && <h3 className="two-column-title">{rightTitle}</h3>}
                <div className="two-column-body">{rightContent}</div>
            </div>
        </div>
    )
}

export function TimelineContainer({ items = [], className = "" }) {
    return (
        <div className={`timeline-container ${className}`.trim()}>
            {items.map((item, index) => {
                const key = `${item.year || "item"}-${index}`
                const paragraphs = Array.isArray(item.text) ? item.text : [item.text]

                return (
                    <div key={key} className="timeline-item">
                        <div className="timeline-marker">
                            <span className="timeline-dot" aria-hidden="true"></span>
                        </div>
                        <div className="timeline-content">
                            {item.year && <div className="timeline-year">{item.year}</div>}
                            {item.title && <h3 className="timeline-title">{item.title}</h3>}
                            {paragraphs.filter(Boolean).map((paragraph, paragraphIndex) => (
                                <p key={paragraphIndex} className="timeline-text">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

function PersonCard({ name, role, image, isLead = false }) {
    return (
        <div className={`person-card ${isLead ? "is-lead" : "not-lead"}`.trim()}>
            {image && <img className={`person-avatar ${isLead ? "is-lead" : "not-lead"}`.trim()} src={image} alt={name || role || "Person"} />}
            {name && <h3 className="person-name">{name}</h3>}
            {role && <p className="person-role">{role}</p>}
        </div>
    )
}

export function PeopleGrid({member, className=""}) {
    return (
        <>
            <div className="people-grid">
                {member.map((person, index) => (
                    <PersonCard
                        key={`${person.name || person.role || "person"}-${index}`}
                        name={person.name}
                        role={person.role}
                        image={person.image}
                    />
                ))}
            </div>
        </>
    )
}

export function PeopleContainer({ title, lead, members = [], className = "" }) {
    return (
        <div className={`people-container ${className}`.trim()}>
            {lead && (
                <div className="people-lead">
                    <PersonCard
                        name={lead.name}
                        role={lead.role}
                        image={lead.image}
                        isLead
                    />
                </div>
            )}
            <PeopleGrid member={members} />
        </div>
    )
}

export function HymnContainer({ video, lyrics, className = "" }) {
    return (
        <div className={`hymn-container ${className}`.trim()}>
            <div className="hymn-card hymn-video">{video}</div>
            <div className="hymn-card hymn-lyrics">{lyrics}</div>
        </div>
    )
}

export function VideoContainer({video, className = ""}) {
    return (
        <>
        
        </>
    )
}

export function LinedLabel({ text, className = "" }) {
    if (!text) return null
    return (
        <div className={`lined-label ${className}`.trim()}>
            <span>{text}</span>
        </div>
    )
}


export function GridContainer({ children, className = "", itemClassName = "" }) {
    const items = Children.toArray(children)
    return (
        <div className={`grid-container ${className}`.trim()}>
            {children}
        </div>
    )
}


export function TextContainer( {children, className = ""} ) {
    return (
        <>
            
        </>
    )
}

export function ColumnContainer({ children, className = "" }) {
    return (
        <>
            <div className={`column-container ${className}`}>
                {children}
            </div>
        </>
    )
}