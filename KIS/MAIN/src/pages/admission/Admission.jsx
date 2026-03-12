import { navigationItems } from '../../data/navigationData'
import { NavigationChildrenGrid, NavigationPages } from '../NavigationPage'

export function AdmissionPage() {
  const admission = navigationItems.find((item) => item.ADMISSION)?.ADMISSION

  return (
    <NavigationPages title="Admissions">
      <NavigationChildrenGrid items={admission?.children || []} />
    </NavigationPages>
  )
}
