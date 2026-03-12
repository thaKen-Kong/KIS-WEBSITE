import { navigationItems } from '../../data/navigationData'
import { NavigationChildrenGrid, NavigationPages } from '../NavigationPage'

export function AboutPage() {
  const about = navigationItems.find((item) => item.ABOUT)?.ABOUT

  return (
    <NavigationPages title="About KIS">
      <NavigationChildrenGrid items={about?.children || []} />
    </NavigationPages>
  )
}
