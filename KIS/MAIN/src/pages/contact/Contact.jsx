import { ContactUs, InteractContainer, LinedLabel, OverviewContainer } from '../../components/utils/Container'
import { navigationItems } from '../../data/navigationData'
import { InteractWithUs } from '../../layouts/Sections/InteractWithUs'
import { NavigationChildrenGrid, NavigationPages } from '../NavigationPage'

export function ContactPage() {
  const contact = navigationItems.find((item) => item.CONTACT)?.CONTACT

  return (
    <NavigationPages title="Contact">
      <OverviewContainer>
        <LinedLabel text="GET IN TOUCH WITH US" className='enlarged gradient'/>
      </OverviewContainer>
      <ContactUs />
      <InteractWithUs />

    </NavigationPages>
  )
}
