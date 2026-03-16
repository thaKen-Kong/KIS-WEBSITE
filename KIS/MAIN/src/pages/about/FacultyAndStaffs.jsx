import { ColumnContainer, Container, LinedLabel, PeopleGrid, SeparationContainer } from '../../components/utils/Container'
import { NavigationPages } from '../NavigationPage'

const people = [
  { name: '', role: '', image : "ken" },
  { name: '', role: '', image : "ken" },
  { name: '', role: '', image : "ken" },
  { name: '', role: '', image : "ken" },
  { name: '', role: '', image : "ken" },
  { name: '', role: '', image : "ken" },
]

export function FacultyAndStaffsPage() {
  return (
    <NavigationPages title="Faculty and Staffs" subtitle={"// "}> 
    
    <LinedLabel text="LIST OF STAFFS" className='enlarged'/>
    
      <SeparationContainer className='vbox'>
        <LinedLabel text="JUNIOR HIGH SCHOOL" className=''/>
        <PeopleGrid member={people} />
        <LinedLabel text="SENIOR HIGH SCHOOL" className=''/>
        <PeopleGrid member={people} />
        <LinedLabel text="NON-TEACHING PERSONELL" className=''/>
        <PeopleGrid member={people} />
      </SeparationContainer>


    </NavigationPages>
  )
}

