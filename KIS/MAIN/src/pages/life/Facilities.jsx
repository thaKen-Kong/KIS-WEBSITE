import { ImageCard } from '../../components/utils/Card'
import { BannerContentContainer, ColumnContainer, FlexContainer, GridContainer, Label, LinedLabel, Page, PageContainer, SeparationContainer } from '../../components/utils/Container'
import { NavigationPages } from '../NavigationPage'
import { canteen, clinic, complab, coveredCourt, extension, library, sbm } from '../../assets/images/images'


const facilities = [
  {
    image: complab,
    label: "Computer Lab",
    content: "Equipped with computers for digital learning, research, and technology activities."
  },
  {
    image: canteen,
    label: "School Canteen",
    content: "Provides students with affordable meals and snacks during school hours."
  },
  {
    image: clinic,
    label: "School Clinic",
    content: "Offers basic medical care and first aid for students and staff."
  },
  {
    image: coveredCourt,
    label: "Covered Court",
    content: "A space for sports activities, events, and school gatherings."
  },
  {
    image: extension,
    label: "Extension Building",
    content: "Additional classrooms and facilities to support student learning."
  },
  {
    image: library,
    label: "Library",
    content: "A quiet space with books and resources for study and research."
  },
  {
    image: sbm,
    label: "SBM Office",
    content: "Supports school-based management and community collaboration."
  }
];

export function FacilitiesPage() {
  return (
    <>
    <NavigationPages title="Facilities">
      <LinedLabel text="FACILITIES AT KIS" className='enlarged gradient'/>
      <SeparationContainer className='vbox'>
      <PageContainer className='green'>
        <LinedLabel className='white' text="LIST OF FACILITIES"/>
      </PageContainer>
      <PageContainer>
      <GridContainer>
        {facilities.map((item, key) => {
          return (
            <ImageCard className="image-card" image={item.image}>
              <LinedLabel text={item.label} className='white diminished' />
              <p>{item.content}</p>
            </ImageCard>
          )
        })}
      </GridContainer>
      </PageContainer>  
      </SeparationContainer>
    </NavigationPages>

    </>
  )
}

