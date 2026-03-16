import { NavigationPages } from '../NavigationPage'
import { LinedLabel, PeopleContainer } from '../../components/utils/Container'

export function AdministrationPage() {
  const administrationLead = {
    name: 'Dr. Leoniza D. Varias',
    role: 'Principal III',
    image : "ken"
  }

  const administrationMembers = [
  ]

  return (
    <NavigationPages title="Administration" subtitle={"// Know who we are"}>
      <LinedLabel className='enlarged' text="SCHOOL ORGANIZATION"/>
      <PeopleContainer
        title="SCHOOL ORGANIZATION"
        lead={administrationLead}
        members={administrationMembers}
      />
    </NavigationPages>
  )
}
