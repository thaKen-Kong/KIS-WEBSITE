import { NavigationPages } from '../NavigationPage'
import { HymnContainer, LinedLabel } from '../../components/utils/Container'

const kaytitingaSchoolSong = [
  "Paaralan ko'ng minamahal",
  "Sagisag ka ng kayumian",
  "Pangalan mo'y ikarangal",
  "Marapat ka at ulira",
  "-",
  "Paaralan ko'ng sinisinta",
  "Mithiin mo'y mapasigla",
  "Ngayon at magpakailanman, ikay aking itatanghal",
  "-",
  "Kaytitinga national High school",
  "Sinisintang paaralan",
  "Pangalan mo ay dakila",
  "Hinubog ang isipan",
  "Kaytitinga National High school",
  "Sa diwa mo'y mananahan",
  "Kaytitinga National high school",
  "Inang paaralan",
  "-",
  "Paaralan ko'ng minamahal",
  "Sagisag ka ng kayumian",
  "Pangalan mo'y ikarangal",
  "Marapat ka at ulira",
  "-",
  "Paaralan ko'ng sinisinta",
  "Mithiin mo'y mapasigla",
  "Ngayon at magpakailanman, ikay aking itatanghal",
  "-",
  "Kaytitinga national High school",
  "Sinisintang paaralan",
  "Pangalan mo ay dakila",
  "Hinubog ang isipan",
  "Kaytitinga National High school",
  "Sa diwa mo'y mananahan",
  "Kaytitinga National High school",
  "Inang paaralan",
  "Kaytitinga National High School",
  "Inang paaralan"
];

export function HymnPage() {
  return (
    <NavigationPages title="Hymn">
      <HymnContainer
        video={
          <div className="hymn-video-wrap">
            <div className="hymn-video-title">
              <span>KAYTITINGA HYMN</span>
            </div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/vsxZfvD9Qyw?si=Ee6lM7swAyVJC4ea"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        }
        lyrics={
          <div>
            <LinedLabel text="HYMN LYRICS" />
            {kaytitingaSchoolSong.map(lyric => {
              return (
                <p>{lyric}</p>
              )
            })}
          </div>
        }
      />
    </NavigationPages>
  )
}
