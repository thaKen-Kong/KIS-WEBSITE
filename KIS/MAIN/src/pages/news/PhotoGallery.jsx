import { WholeImage } from '../../components/utils/Card'
import Carousel, { ColumnContainer, LinedLabel, OverviewContainer, PhotoContainer, SeparationContainer } from '../../components/utils/Container'
import { NavigationPages } from '../NavigationPage'
import {complab, competition2, torch} from '../../assets/images/images'


const slides = [
  () => <WholeImage image={complab} className='dark'/>,
  () => <WholeImage image={competition2} className='dark'/>,
  () => <WholeImage image={torch} className='dark'/>
]

export function PhotoGalleryPage() {
  return (
    <NavigationPages title="Photo Gallery">
      <SeparationContainer className='vbox'>
      <OverviewContainer>
        <LinedLabel text="PHOTOs" className='enlarged'/>
        <p>Take a look at these photos:</p>
      </OverviewContainer>
      <ColumnContainer className='green'>
        <Carousel slides={slides}/>
      </ColumnContainer>
      </SeparationContainer>
    </NavigationPages>
  )
}

