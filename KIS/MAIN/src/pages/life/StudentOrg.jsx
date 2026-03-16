import { OutlineButton, PrimaryButton } from '../../components/utils/Buttons'
import { HexagonCard, ImageCard, WholeImage } from '../../components/utils/Card'
import { BannerContentContainer, BannerImageContainer, ColumnContainer, Container, GridContainer, HexagonGrid, Label, LinedLabel, OverviewContainer, Page, PageContainer, PhotoContainer, QuoteContainer, SeparationContainer, SocialsContainer, TextContainer, TimelineContainer, TwoColumnContainer } from '../../components/utils/Container'
import { NavigationPages } from '../NavigationPage'
import { sslg2, sslgLogo, torch } from '../../assets/images/images'

const images = [
  { src: sslg2, alt: "Photo 1" },
  { src: sslg2, alt: "Photo 2" },
  { src: sslg2, alt: "Photo 3" },
  { src: sslg2, alt: "Photo 4" },
  { src: sslg2, alt: "Photo 5" },
  { src: sslg2, alt: "Photo 6" },
  { src: sslg2, alt: "Photo 7" },
  { src: sslg2, alt: "Photo 8" },
  { src: sslg2, alt: "Photo 9" },
];


const what_we_do = [
  {year : "1.", text : "Student leadership and representation"},
  {year : "2.", text : "Organizing school events and programs"},
  {year : "3.", text : "Promoting student participation and collaboration"}
]


const socials = [
        {
            label: "Facebook",
            href: "https://www.facebook.com/KISTheTorch",
            icon: (
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                        d="M14.5 8.25h2.1V5.6h-2.4c-2.4 0-3.8 1.42-3.8 3.7v1.95H8.1v2.65h2.3V20h2.8v-6.1h2.25l.35-2.65h-2.6V9.5c0-.78.2-1.25 1.3-1.25z"
                        fill="currentColor"
                    />
                </svg>
            )
        },
        {
            label: "Website",
            href: "https://mikaleahlouanna21.my.canva.site/voices-of-victory-the-journalism-excellence-of-kis/",
            icon: (
              <svg viewBox="0 0 200 200" width="120">
                <circle cx="100" cy="100" r="90" fill="#1f8a5c"/>
                <path
                  d="M40 60 L65 140 L100 80 L135 140 L160 60"
                  fill="none"
                  stroke="white"
                  strokeWidth="14"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )
        },

      ]

      
export function StudentOrgPage() {
  return (
    <>
    <NavigationPages title="Student Organizations" subtitle="Empowering students through leadership and collaboration">
      <OverviewContainer>
        <LinedLabel className='enlarged' text="ORG OVERVIEW" />
        <TextContainer content=" Our student organizations provide opportunities for students to develop leadership, teamwork, and organizational skills. Members engage in school projects, competitions, community service, and various extra-curricular activities that enrich their academic journey."/>
        <QuoteContainer quote="“Empowering students through leadership and collaboration”"/>
      </OverviewContainer>
      <SeparationContainer className='vbox'>
      <PageContainer>
        <LinedLabel text="OUR STUDENT ORGANIZATION" />
        <GridContainer className='stretch'>
        <SeparationContainer className='hbox'>
          <HexagonCard image={sslgLogo} className='dark' path="#sslg"/>
          <HexagonCard image={torch} className='dark' path="#thetorch"/>
        </SeparationContainer>
      </GridContainer>
      </PageContainer>
        
      </SeparationContainer>
      
    </NavigationPages>


    {/* SSLG */}
    <SeparationContainer className='vbox'>
    <Page id="sslg">
      <SeparationContainer className='vbox'>
      <Label text="SUPREME STUDENTS LEARNER GOVERNMENT" className="shadow green"/>
      <OverviewContainer>
        <Container>
          <p>The SSLG represents the student body, promotes leadership, and organizes school-wide events and initiatives. It serves as the voice of students while fostering teamwork, responsibility, and school spirit.</p>
        </Container>
      </OverviewContainer>
      <WholeImage image={sslg2} className='dark'>
        <LinedLabel className='white' text="ABOUT SSLG" />
        <p>The Supreme Secondary Learner Government (SSLG) represents the voice of the student body and serves as a link between students, teachers, and school administrators. It promotes student leadership by giving learners opportunities to organize activities, lead programs, and participate in decision-making. Through these initiatives, the SSLG helps strengthen school spirit, teamwork, and a sense of unity within the school community.</p>
      </WholeImage>
      <TwoColumnContainer leftTitle="WHAT WE DO" leftContent={<TimelineContainer items={what_we_do} />} rightTitle="OUR LOGO" rightContent={[<WholeImage className='dark' image={sslgLogo} ><LinedLabel className='white' text="SSLG LOGO"/></WholeImage>,<OutlineButton path="https://sslgkaytitinga.my.canva.site"><Label className="shadow diminished" text="LEARN MORE ABOUT SSLG"/></OutlineButton>]} className='gradient'/>
      </SeparationContainer>
    </Page>

    <PageContainer>
      <div className="navigation-page-body">
      <SeparationContainer className='vbox'>
      <LinedLabel text="CAMPUS JOURNALISM" className='enlarged gradient'/>
      <PageContainer className='green'>
        <LinedLabel text="THE TORCH / ANG TANGLAW" className='white enlarged' />
        <GridContainer className='stretch'>
        <WholeImage image={torch} className='dark' >
          <LinedLabel text="ABOUT THE TORCH" className='gradient'/>
          <p>The Campus Journalism <strong>THE TORCH</strong> organization develops students’ skills in writing, reporting, editing, and photography while producing school publications and covering school events.</p>
          <SocialsContainer label="LEARN MORE ABOUT US" socials={socials}/>
        </WholeImage>
        </GridContainer>
      </PageContainer>
      </SeparationContainer>
      </div>
    </PageContainer>
    </SeparationContainer>
    </>
)
}

