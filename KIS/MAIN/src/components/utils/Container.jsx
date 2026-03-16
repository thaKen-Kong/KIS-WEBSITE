import { Children, useState } from "react";
import { Link } from "react-router-dom";
import heroBg from "../../assets/images/bg/bg_1.jpg";

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
                <LinedLabel text={leftTitle} className={className}/>
                <div className="two-column-body">
                    <SeparationContainer className="vbox">
                        {leftContent}
                    </SeparationContainer>
                </div>
            </div>
            <div className="two-column-card">
                <LinedLabel text={rightTitle} className={className}/>
                <div className="two-column-body">
                    <SeparationContainer className="vbox">
                        {rightContent}
                    </SeparationContainer>
                </div>
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

export function MultiLinedLabel({text, className =""}) {
    return (
        <div className={`m-lined-label ${className}`.trim()}>
        <div className="m-line"></div>
        <span>
            {text}
        </span>
        <div className="m-line"></div>
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


export function TextContainer( {content, children, className = ""} ) {
    return (
        <>
            <p className={`kis-card-text ${className}`}>{content}</p>
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

export function PageHeader( {title, subtitle} ) {
    return (
        <>
            <header className="navigation-page-header">
                <img className="navigation-page-bg" src={heroBg} alt="" aria-hidden="true" />
                {title && <h1 className="navigation-page-title">{title}</h1>}
                {subtitle && <p className="navigation-page-subtitle">{subtitle}</p>}
            </header>
        </>
    )
}


export function OverviewContainer({children, text, textClassName}) {
    return (
        <>
            <section className="overview-container">
                <LinedLabel text={text} className={textClassName}/>
                {children}
            </section>
        </>
    )
}

export function SeparationContainer({children, className = ""} ){
    return (
        <>
            <div className={`separator ${className}`}>
                {children}
            </div>
        </>
    )
}


export function BannerImageContainer({imgClassName, className = "", image, src}) {
    return (
        <>
        <Link to={src}>
            <div className={`banner-container ${className}`}>
                <img src={image} alt="" className={imgClassName}/>
            </div>
        </Link>
        </>
    )
}

export function BannerContentContainer({className = "", image, label = "", content = "", children}) {
    return (
        <>
            <div className="banner-content-container">
                <img src={image} alt="" />
                <div className="banner-content">
                    <h2>{label}</h2>
                    <p>{content}</p>
                </div>
            </div>
        </>
    )
}


export function Grid2by2({children}) {
    return (
        <>
            <div className="two-by-two">
                {children}
            </div>
        </>
    )
}


export function QuoteContainer( {quote}) {
    return (
        <>
        <div className="quote-container">
            <p className="quote">
                {quote}
            </p>
        </div>
        </>
    )
}

export function HexagonGrid( {className, children}) {
    return (
        <>
            <div className="hexagon-grid">
                {children}
            </div>
        </>
    )
}

export function AdjustableTwoColumn({children, className}) {
    return (
        <>
            
        </>
    )
}

export function Label({children, className, text}) {
    return (
        <>
            <div className={`label ${className}`}>
                <h2>{text}</h2>
            </div>
        </>
    )
}

export function Page({children, className =""}) {
    return (
        <>
            <section className="page">
                {children}
            </section>
        </>
    )
}



export function PhotoContainer({children, images = [], className = ""}) {
    return (
        <>
            <section className={`photo-container ${className}`}>
                {images.slice(0).map(image => (
                    <img src={image.src} alt={image.alt}/> 
                ))}
            </section>
        </>
    )
}

export function SocialsContainer({children, label, socials = []}) {
    return(
        <>
          <div className="interact-socials">
            <p className="interact-socials-title">{label}</p>
            <div className="interact-socials-row">
                {socials.map((social) => (
                    <a
                        key={social.label}
                        className="interact-social-link"
                        href={social.href}
                        aria-label={social.label}
                        target="_blank"
                        rel="noreferrer"
                                >
                        {social.icon}
                    </a>
                ))}
            </div>
          </div>
        </>
    )
}

export function FlexContainer({children, className = ""}) {
    return(
        <>
            <div className={`flex-container ${className}`}>{children}</div>
        </>
    )
}


const Carousel = ({ slides = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel-wrapper"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((SlideComponent, idx) => (
          <div className="carousel-slide" key={idx}>
            <SlideComponent /> {/* Render your component here */}
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button className="carousel-prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="carousel-next" onClick={nextSlide}>
        &#10095;
      </button>

      {/* Dots */}
      <div className="carousel-dots">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${currentIndex === idx ? "active" : ""}`}
            onClick={() => goToSlide(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;


export const ContactUs = ({
  address = "Kaytitinga 1, Alfonso, Cavite",
  phone = "(046)-522-0090",
  email = "depedcavite.kaytitinganhs@gmail.com",
  socialLinks = [
    { name: "Facebook", url: "#" },
    { name: "Instagram", url: "#" },
    { name: "Twitter", url: "#" },
  ],
  mapSrc = "https://www.google.com/maps/embed?pb=...", // Replace with your map embed link
}) => {
  return (
    <section className="contact-us">
      <h1>Contact Us</h1>
      <p>Have questions or need assistance? Reach out to us!</p>

      <div className="contact-content">
        {/* Contact Information */}
        <div className="contact-info">
          <h2>Our Location</h2>
          <p>{address}</p>

          <h2>Phone</h2>
          <p>{phone}</p>

          <h2>Email</h2>
          <p>{email}</p>

          <h2>Follow Us</h2>
          <div className="social-links">
            {socialLinks.map((link, idx) => (
              <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer">
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Map */}
        <div className="contact-map">
          <iframe
            src={mapSrc}
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: "10px" }}
            allowFullScreen=""
            loading="lazy"
            title="Location Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
