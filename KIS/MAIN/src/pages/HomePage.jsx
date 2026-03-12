import { HeroSection } from '../layouts/Sections/HeroSection'
import { OverviewSection } from '../layouts/Sections/OverviewSection'
import { NewsSection } from '../layouts/Sections/NewsSection'
import { GlanceSection } from '../layouts/Sections/GlanceSection'
import { UpcomingEventsSection } from '../layouts/Sections/UpcomingEventsSection'
import { InteractWithUs } from '../layouts/Sections/InteractWithUs'


export function HomePage() {
  return (
    <>
      <HeroSection />
      <OverviewSection />
      <NewsSection />
      <GlanceSection />
      <UpcomingEventsSection />
      <InteractWithUs />
    </>
  )
}
