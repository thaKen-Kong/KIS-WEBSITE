import { WholeImage } from '../../components/utils/Card'
import { Label, OverviewContainer } from '../../components/utils/Container'
import { NavigationPages } from '../NavigationPage'

export function AnnouncementsPage() {
  return (
    <NavigationPages title="Announcements">
      <WholeImage>
        <Label className="" text="ANNOUNCEMENTS COMING SOON"/>
      </WholeImage>
    </NavigationPages>
  )
}

