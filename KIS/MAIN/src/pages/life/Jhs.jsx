import { PrimaryButton } from '../../components/utils/Buttons'
import { Card, UtilCard, ImageCard } from '../../components/utils/Card'
import { BannerImageContainer, ColumnContainer, Container, GridContainer, LinedLabel, OverviewContainer, SeparationContainer, TextContainer, TimelineContainer } from '../../components/utils/Container'
import { NavigationPages } from '../NavigationPage'
import { complab, competition2, image, matatagC } from '../../assets/images/images'

const text = [
  {
    year : "",
    text : "Our Junior High School curriculum follows the standards of the Department of Education and focuses on building strong academic foundations, critical thinking, and character development to prepare students for Senior High School."
  }
]


export function JhsPage() {
  return (
    <NavigationPages title="JHS">
        <OverviewContainer text="JHS OVERVIEW" textClassName="enlarged">
          <Container>
            <p>The Junior High School program at KIS focuses on building strong academic foundations while developing critical thinking, creativity, and good character. Through engaging lessons, activities, and school events, students are encouraged to explore their interests and grow into confident and responsible learners.</p>
          </Container>
        </OverviewContainer>
        <SeparationContainer className='vbox'>
          <LinedLabel text="Programs" />
          <GridContainer>
            <ImageCard className="image-card" image={complab}>
              <LinedLabel text="STEM ACTIVITIES" className='white'/>
              <p>Hands-on science, technology, and math activities that encourage curiosity and innovation.</p>
            </ImageCard>
            <ImageCard className="image-card" image={competition2}>
              <LinedLabel text="COMPETITIONS" className='white'/>
              <p>Students participate in academic and skills competitions that build confidence and teamwork.</p>
            </ImageCard>
            <ImageCard className="image-card" image={image}>
              <LinedLabel text="PROJECTS" className='white'/>
              <p>Collaborative projects that allow students to apply what they learn in real-world scenarios..</p>
            </ImageCard>
          </GridContainer>
          <Container className='green'>
            <LinedLabel className='enlarged white' text="CURRICULUM" />
          </Container>
          <TimelineContainer items={text} />
          <ColumnContainer >
            <BannerImageContainer image={matatagC} />
            <PrimaryButton path="https://www.deped.gov.ph/matatag-curriculum/">Read More About the Curriculum</PrimaryButton>
          </ColumnContainer>
        </SeparationContainer>
    </NavigationPages>
  )
}


