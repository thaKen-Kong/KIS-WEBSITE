export function BannerCard({ title, subtitle, children, className = "" }) {
    return (
        <div className={`banner-card ${className}`.trim()}>
            <div className="banner-card-body">
                {title && <h3 className="banner-card-title">{title}</h3>}
                {subtitle && <p className="banner-card-sub">{subtitle}</p>}
                {children}
            </div>
        </div>
    )
}
