import { NavigationPages } from '../NavigationPage'
import { PeopleContainer } from '../../components/utils/Container'

export function AdministrationPage() {
  const administrationLead = {
    name: 'Full Name',
    role: 'School Head',
  }

  const administrationMembers = [
    { name: 'Full Name', role: 'Assistant Principal' },
    { name: 'Full Name', role: 'Head Teacher' },
    { name: 'Full Name', role: 'Registrar' },
    { name: 'Full Name', role: 'Guidance Coordinator' },
    { name: 'Full Name', role: 'Property Custodian' },
    { name: 'Full Name', role: 'School Nurse' },
  ]

  return (
    <NavigationPages title="Administration">
      <PeopleContainer
        title="Administration Team"
        lead={administrationLead}
        members={administrationMembers}
      />
    </NavigationPages>
  )
}
