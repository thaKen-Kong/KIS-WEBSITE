import { NavigationPages } from '../NavigationPage'
import { OverviewContainer, Container, PageContainer, LinedLabel, ColumnContainer, BannerContentContainer, Grid2by2, SeparationContainer, TwoColumnContainer, BannerImageContainer, TimelineContainer } from '../../components/utils/Container'
import { WholeImage } from '../../components/utils/Card'
import { OutlineButton, PrimaryButton } from '../../components/utils/Buttons'

const track = [
  { label : "STEM", content : "Science, Technology, Engineering, and Mathematics (STEM) focuses on developing analytical thinking, problem-solving, and innovation through science and technology. It prepares students for careers in engineering, medicine, information technology, and scientific research."},
  { label : "ABM", content : "The Accountancy, Business, and Management (ABM) strand introduces students to the fundamentals of business, finance, entrepreneurship, and management. It prepares learners for careers in business, marketing, accounting, and corporate management."},
  { label : "TVL", content : "The Technical-Vocational-Livelihood (TVL) strand focuses on practical and industry-based skills training. It prepares students for employment, entrepreneurship, and technical careers through hands-on learning and certifications."},
  { label : "HUMMS", content : "Humanities and Social Sciences (HUMSS) develops communication, critical thinking, and understanding of human behavior and society. This strand prepares students for careers in education, communication, public service, and social sciences."} 
]


const text = [
  {year : "", text : "Students engage in research projects that develop critical thinking and problem-solving skills. From scientific experiments to social studies investigations, learners explore real-world challenges and present their findings."}
]

const text_2 = [
  {year : "", text : "Work immersion gives students real-world experience in their chosen strand. Learners observe professionals, practice skills, and gain practical knowledge that prepares them for future careers."}
]

export function ShsPage() {
  return (
    <>
      <NavigationPages title="SHS">
        <OverviewContainer text="SHS OVERVIEW" textClassName="enlarged">
          <Container>
            <p>Our Senior High School program provides students with specialized learning tracks that help them prepare for higher education, employment, or entrepreneurship. The curriculum focuses on developing academic excellence, practical skills, and responsible leadership.</p>
          </Container>
        </OverviewContainer>
      </NavigationPages>
      <SeparationContainer className='vbox'>
      <PageContainer className='green'>
        <LinedLabel text="WHAT WE OFFER IN SENIOR HIGH SCHOOL" className='white'/>
        <ColumnContainer>
          <Grid2by2>
            {track.map((item, key) => (
            <BannerContentContainer label={item.label} content={item.content} />
          ))}
          </Grid2by2>
        </ColumnContainer>
      </PageContainer>
      <PageContainer>
        <div className="navigation-page-body">
          <SeparationContainer className='vbox'>
            <LinedLabel text="WHAT WE DO?" className='enlarged'/>
            <TwoColumnContainer 
              leftTitle="RESEARCH PROJECTS"
              leftContent={[<BannerImageContainer image="/src/assets/images/example-img/research.jpg" className='dark'/>, <TimelineContainer items={text}/>]}
              rightTitle="WORK IMMERSION"
              rightContent={[<BannerImageContainer image='/src/assets/images/example-img/work-immersion.png' className='dark' />, <TimelineContainer items={text_2} />]}
            />
            <ColumnContainer className='green'>
              <LinedLabel text="CURRICULUM" />
              <WholeImage image="/src/assets/images/example-img/bg_2.png" className='dark'>
                <LinedLabel className='white' text="LEARN MORE ABOUT OUR CURRICULUM" />
                <p>Our Senior High School curriculum follows the Department of Education standards, combining core subjects, applied subjects, and specialized subjects based on the chosen track. This ensures students gain strong academic foundations while developing practical skills and critical thinking needed for college, careers, and everyday life.</p>
                <PrimaryButton path="https://www.deped.gov.ph/strengthened-shs-program/">CLICK HERE TO LEARN MORE</PrimaryButton>
              </WholeImage>
            </ColumnContainer>
          </SeparationContainer>
        </div>
      </PageContainer>
      </SeparationContainer>
    </>
  )
}

