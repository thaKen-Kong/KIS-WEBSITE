import { ColumnContainer, Container, LinedLabel, PeopleGrid } from '../../components/utils/Container'
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
    

    <ColumnContainer>
      <div className="separation-container">
        <LinedLabel text="JUNIOR HIGH SCHOOL" className=''/>
        <PeopleGrid member={people} />
      </div>
      <div className="separation-container">
        <LinedLabel text="SENIOR HIGH SCHOOL" className=''/>
        <PeopleGrid member={people} />
      </div>
      <div className="separation-container">
        <LinedLabel text="NON-TEACHING PERSONELL" className=''/>
        <PeopleGrid member={people} />
      </div>

    </ColumnContainer>

    </NavigationPages>
  )
}

