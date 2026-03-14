import { NavigationPages } from '../NavigationPage'
import { LinedLabel, PeopleContainer } from '../../components/utils/Container'

export function AdministrationPage() {
  const administrationLead = {
    name: 'Dr. Leoniza D. Varias',
    role: 'Principal III',
    image : "ken"
  }

  const administrationMembers = [
    { name: '', role: 'Assistant Principal', image : "ken" },
    { name: '', role: 'Head Teacher' , image : "ken"},
    { name: '', role: 'Registrar', image : "ken" },
    { name: '', role: 'Guidance Coordinator', image : "ken" },
    { name: '', role: 'Property Custodian', image : "ken" },
    { name: '', role: 'School Nurse', image : "ken" },
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
