import { Link } from 'react-router-dom'
import { PageContainer, PageHeader } from '../components/utils/Container'

export function NavigationPages({ title, subtitle, children, className = "" }) {
    return (
        <>
            <main className={`navigation-page ${className}`}>
                <PageHeader title={title} subtitle={subtitle}/>
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
