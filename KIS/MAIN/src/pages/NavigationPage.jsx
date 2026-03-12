import { Link } from 'react-router-dom'
import { PageContainer } from '../components/utils/Container'

export function NavigationPages({ title, subtitle, children }) {
    return (
        <>
            <main className="navigation-page">
                <header className="navigation-page-header">
                    <img className="navigation-page-bg" src="/src/assets/images/bg_1.jpg" alt="" aria-hidden="true" />
                    {title && <h1 className="navigation-page-title">{title}</h1>}
                    {subtitle && <p className="navigation-page-subtitle">{subtitle}</p>}
                </header>
                <PageContainer>
                    <div className="navigation-page-body">
                        {children}
                    </div>
                </PageContainer>
            </main>
        </>
    )
}

export function NavigationChildrenGrid({ items = [] }) {
    const visibleItems = items.filter((item) => item.label)

    return (
        <div className="nav-children-grid">
            {visibleItems.map((item) => {
                const key = `${item.label}-${item.path}`
                const card = (
                    <div className="nav-child-card">
                        <span>{item.label}</span>
                    </div>
                )

                if (item.path && item.path.startsWith('/')) {
                    return (
                        <Link key={key} to={item.path} className="nav-child-link">
                            {card}
                        </Link>
                    )
                }

                return (
                    <a key={key} href={item.path || '#'} className="nav-child-link">
                        {card}
                    </a>
                )
            })}
        </div>
    )
}
