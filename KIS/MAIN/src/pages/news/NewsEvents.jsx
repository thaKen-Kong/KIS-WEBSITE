import { navigationItems } from '../../data/navigationData'
import { NavigationChildrenGrid, NavigationPages } from '../NavigationPage'

export function NewsEventsPage() {
  const news = navigationItems.find((item) => item.NEWS_EVENTS)?.NEWS_EVENTS

  return (
    <NavigationPages title="What's New">
      <NavigationChildrenGrid items={news?.children || []} />
    </NavigationPages>
  )
}
