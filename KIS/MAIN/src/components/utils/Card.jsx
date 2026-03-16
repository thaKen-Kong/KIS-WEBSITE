import { Link } from "react-router-dom"

export function Card({ title, content, image, children, date, className = "" }) {
  return (
    <div className={`kis-card ${className}`.trim()}>
      {image && (
        <div className="kis-card-image-wrapper">
          <img className="kis-card-image" src={image} alt={title || "Card image"} />
        </div>
      )}

      <div className="kis-card-body">
        {date && (
          <div className="kis-card-meta">
            <span className="kis-card-date">{date}</span>
          </div>
        )}

        {title && <h3 className="kis-card-title">{title}</h3>}

        {content && <p className="kis-card-text">{content}</p>}

        {children}
      </div>
    </div>
  )
}

export function NewsCard( {content = {} } ) {
    return (
        <>
            <Link to={`${content.slug}`} className="card-link">
                <Card {...content}/>
            </Link>
        </>
    )
}

export function UtilCard( {children, className = ""} ) {
    return (
        <>
            <div className={`kis-card ${className}`}>
                {children}
            </div>
        </>
    )
}