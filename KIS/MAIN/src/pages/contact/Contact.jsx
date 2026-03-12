import { navigationItems } from '../../data/navigationData'
import { NavigationChildrenGrid, NavigationPages } from '../NavigationPage'

export function ContactPage() {
  const contact = navigationItems.find((item) => item.CONTACT)?.CONTACT

  return (
    <NavigationPages title="Contact">
      <NavigationChildrenGrid items={contact?.children || []} />
    </NavigationPages>
  )
}
