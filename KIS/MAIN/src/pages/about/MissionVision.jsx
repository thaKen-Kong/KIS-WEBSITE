import { NavigationPages } from '../NavigationPage'
import { TwoColumnContainer } from '../../components/utils/Container'

export function MissionVisionPage() {
  return (
    <NavigationPages title="Mission and Vision">
      <TwoColumnContainer
        leftTitle="Mission"
        rightTitle="Vision"
        leftContent={
          <>
            <p>
              We are committed to protecting every Filipino&apos;s right to quality
              and inclusive basic education.
            </p>
            <p>We make this possible by ensuring:</p>
            <ul>
              <li>Students learn in safe, supportive, and motivating environments.</li>
              <li>Teachers guide, inspire, and nurture every learner.</li>
              <li>School leaders and staff create systems that help learning thrive.</li>
              <li>Families and communities work hand-in-hand in raising lifelong learners.</li>
            </ul>
          </>
        }
        rightContent={
          <>
            <p>
              We envision Filipinos who love their country, believe in their abilities,
              and use their talents to help build a better nation.
            </p>
            <p>
              We are a learner-centered institution that keeps improving to serve every
              Filipino better.
            </p>
          </>
        }
      />
    </NavigationPages>
  )
}
