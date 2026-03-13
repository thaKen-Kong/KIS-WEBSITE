import { Link } from "react-router-dom"

export function Card({ title, description, image, children, date, className = "" }) {
    return (
        <div className={`kis-card ${className}`.trim()}>
            {image && <img className="kis-card-image" src={image} alt={title || "Card image"} />}
            <div className="kis-card-body">
                {title && <h3 className="kis-card-title">{title}</h3>}
                {description && <p className="kis-card-text">{description}</p>}
                {date && <p className="kis-card-text">{date}</p>}
                {children}
            </div>
        </div>
    )
}

export function NewsCard( {content = {} } ) {
    return (
        <>
            <Link to={`ken`} className="card-link">
                <Card {...content}/>
            </Link>
        </>
    )
}