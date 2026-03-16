import { useEffect, useState } from 'react'
import { ColumnContainer, Container, LinedLabel, SeparationContainer } from '../../components/utils/Container'
import { EventCard } from '../../components/utils/EventCard'
import { Loading } from '../../components/utils/Loading'
import { Pagination } from '../../components/utils/Pagination'
import { NavigationPages } from '../NavigationPage'
import { getEvents } from '../../client/newsApi'



export function UpcomingEventsPage() {

  const [eventsList, setEventsList] = useState([])

  useEffect(()=> {
    getEvents().then(events => {setEventsList(events)})
  }, [eventsList])
  
  return (
    <NavigationPages title="Upcoming Events">
      <SeparationContainer className='vbox'>
      <LinedLabel text="EVENTS LIST" className='enlarged'/>
      <ColumnContainer className=''>
          {eventsList.length === 0 ? <Loading /> : eventsList.map((item, key) => (<EventCard key={key} {...item}/>))}
      </ColumnContainer>
      <Pagination page={1}/>
      </SeparationContainer>
    </NavigationPages>
  )
}

