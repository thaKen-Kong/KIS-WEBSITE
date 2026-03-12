import { NavigationPages } from '../NavigationPage'
import { GridContainer, LinedLabel } from '../../components/utils/Container'
import { Card } from '../../components/utils/Card'
import { Pagination } from '../../components/utils/Pagination'

export function NewsPage() {
  const newsItems = [
    {
      title: 'School Improvement Updates',
      date: 'March 2024',
      summary: 'New classrooms and learning spaces are now ready for use.',
    },
    {
      title: 'Community Outreach Day',
      date: 'February 2024',
      summary: 'Students and teachers joined local partners for outreach programs.',
    },
    {
      title: 'Campus Safety Drive',
      date: 'January 2024',
      summary: 'Safety drills and campus enhancements were completed this month.',
    },
    {
      title: 'Student Talent Showcase',
      date: 'December 2023',
      summary: 'Performances and exhibits highlighted student creativity.',
    },
    {
      title: 'Library Modernization',
      date: 'November 2023',
      summary: 'New reading corners and resources are now available.',
    },
    {
      title: 'Parent Partnership Forum',
      date: 'October 2023',
      summary: 'Families collaborated with staff on student success plans.',
    },
  ]

  return (
    <NavigationPages title="News">
      <LinedLabel text="NEWS LIST" />
      <GridContainer className="news-grid">
        {newsItems.map((item) => (
          <Card {...item} />
        ))}
      </GridContainer>
      <Pagination page={1} totalPages={5} onPageChange={(p) => setPage(p)} />
    </NavigationPages>
  )
}
