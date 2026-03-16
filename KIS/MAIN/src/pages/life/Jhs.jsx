import { Card, UtilCard } from '../../components/utils/Card'
import { Container, GridContainer, LinedLabel, OverviewContainer, SeparationContainer, TextContainer } from '../../components/utils/Container'
import { NavigationPages } from '../NavigationPage'

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
            <UtilCard className="util-card">
              <LinedLabel text="STEM ACTIVITIES"/>
              <TextContainer content="Hands-on science, technology, and math activities that encourage curiosity and innovation." className='enlarged'/>
            </UtilCard>
            <UtilCard className="util-card">
              <LinedLabel text="COMPETITIONS"/>
              <TextContainer content="Students participate in academic and skills competitions that build confidence and teamwork." className='enlarged'/>
            </UtilCard>
            <UtilCard className="util-card">
              <LinedLabel text="SCHOOL PROJECT"/>
              <TextContainer content="Collaborative projects that allow students to apply what they learn in real-world scenarios." className='enlarged'/>
            </UtilCard>
          </GridContainer>
        </SeparationContainer>
    </NavigationPages>
  )
}

