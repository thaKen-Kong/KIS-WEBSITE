import { ColumnContainer, Container, LinedLabel } from '../../components/utils/Container'
import { EventCard } from '../../components/utils/EventCard'
import { Pagination } from '../../components/utils/Pagination'
import { NavigationPages } from '../NavigationPage'

export function UpcomingEventsPage() {
  return (
    <NavigationPages title="Upcoming Events">
       <LinedLabel text="EVENTS LIST" />
      <ColumnContainer className=''>
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </ColumnContainer>
      <Pagination page={1}/>
    </NavigationPages>
  )
}

