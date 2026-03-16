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
            <Link to={`/what-is-new/news/${content.slug}`} className="card-link">
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

export function ImageCard({children, className="", image}) {
    return (
        <>
            <div className={`kis-card ${className}`.trim()}>
                <img src={image} alt=""/>
                <div className="overlay-content">
                  {children}
                </div>
                
            </div>
        </>
    )
}

export function WholeImage({children, className="", image}) {
  return (
    <>
      <div className={`whole-image ${className}`}>
        <img src={image} alt="" />
        <div className="overlay-content">
            {children}
        </div>
      </div>
    </>
  )
}

export function HexagonCard({path = "#",image, label = ""}) {
  return (
    <div className="hexagon-card">
      <div className="hexagon">
        <a href={path}><img src={image} alt={label} /></a>
      </div>
      {label && <p className="hex-label">{label}</p>}
    </div>
  );
}
