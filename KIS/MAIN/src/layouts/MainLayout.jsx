import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { HeaderSection } from './Sections/HeaderSection'
import { NavigationSection } from './Sections/NavigationSection'
import { FooterSection } from './Sections/FooterSection'

export function MainLayout() {
  const [showScroll, setShowScroll] = useState(false)
  const [isNavOpen, setIsNavOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 300)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavToggle = () => {
    setIsNavOpen((prev) => !prev)
  }

  const handleNavClose = () => {
    setIsNavOpen(false)
  }

  useEffect(() => {
    const root = document.querySelector('.main-layout')
    if (!root) return

    const elements = root.querySelectorAll('section, footer')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    elements.forEach((el) => {
      el.classList.add('reveal')
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
    <div className="top-layout">
        <HeaderSection />
    </div>
    <NavigationSection isOpen={isNavOpen} onToggle={handleNavToggle} onClose={handleNavClose} />
    <main className="main-layout">
      <Outlet />
    </main>
    <button
        className={`scroll-top ${showScroll ? 'show' : ''}`}
        type="button"
        onClick={handleScrollTop}
        aria-label="Scroll to top"
      >
        ↑
    </button>
    <FooterSection />
    </>
  )
}
