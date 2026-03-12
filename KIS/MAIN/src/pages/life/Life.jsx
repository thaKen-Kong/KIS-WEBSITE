import { navigationItems } from '../../data/navigationData'
import { NavigationChildrenGrid, NavigationPages } from '../NavigationPage'

export function LifePage() {
  const life = navigationItems.find((item) => item.LIFE_KIS)?.LIFE_KIS

  return (
    <NavigationPages title="Life @ KIS">
      <NavigationChildrenGrid items={life?.children || []} />
    </NavigationPages>
  )
}
