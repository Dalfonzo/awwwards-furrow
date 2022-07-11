import { useState } from 'react'
import { useCursorStyle } from '~/context/cursorStyleContext'
import * as S from './Accordion.styles'

const Accordion = () => {
  const [visibleItem, setVisibleItem] = useState(0)
  const { setCursorToHoverAccentStyle, setCursorToNormalAccentStyle } = useCursorStyle()

  return (
    <div>
      <S.Heading>Services</S.Heading>
      <S.List>
        <S.Item>
          <S.Title
            onClick={() => setVisibleItem(0)}
            className={visibleItem === 0 ? 'open' : ''}
            onMouseEnter={() => !(visibleItem === 0) && setCursorToHoverAccentStyle()}
            onMouseLeave={setCursorToNormalAccentStyle}
          >
            Pre-Production
          </S.Title>
          <S.Content className={visibleItem === 0 ? 'open' : 'closed'} data-items="7">
            <p>Creative Development</p>
            <p>Writing</p>
            <p>Storyboards</p>
            <p>Art Direction</p>
            <p>Creative Direction</p>
            <p>Location Scouting</p>
            <p>Casting</p>
          </S.Content>
        </S.Item>
        <S.Item>
          <S.Title
            onClick={() => setVisibleItem(1)}
            className={visibleItem === 1 ? 'open' : ''}
            onMouseEnter={() => !(visibleItem === 1) && setCursorToHoverAccentStyle()}
            onMouseLeave={setCursorToNormalAccentStyle}
          >
            Video Production
          </S.Title>
          <S.Content className={visibleItem === 1 ? 'open' : 'closed'} data-items="5">
            <p>Principle Photography</p>
            <p>Production Management</p>
            <p>Crew</p>
            <p>Dailies</p>
            <p>LTO-Archiving</p>
          </S.Content>
        </S.Item>
        <S.Item>
          <S.Title
            onClick={() => setVisibleItem(2)}
            className={visibleItem === 2 ? 'open' : ''}
            onMouseEnter={() => !(visibleItem === 2) && setCursorToHoverAccentStyle()}
            onMouseLeave={setCursorToNormalAccentStyle}
          >
            Post-Production
          </S.Title>
          <S.Content className={visibleItem === 2 ? 'open' : 'closed'} data-items="10">
            <p>Colour correction</p>
            <p>Offline editing</p>
            <p>Online editing</p>
            <p>VFX</p>
            <p>Animation and motion graphics</p>
            <p>Captioning and subtitles</p>
            <p>Descriptive video</p>
            <p>Dailies</p>
            <p>Quality control</p>
            <p>LTO Archiving</p>
          </S.Content>
        </S.Item>
        <S.Item>
          <S.Title
            onClick={() => setVisibleItem(3)}
            className={visibleItem === 3 ? 'open' : ''}
            onMouseEnter={() => !(visibleItem === 3) && setCursorToHoverAccentStyle()}
            onMouseLeave={setCursorToNormalAccentStyle}
          >
            Audio Post-Production
          </S.Title>
          <S.Content className={visibleItem === 3 ? 'open' : 'closed'} data-items="5">
            <p>We work with some amazing partners who provide:</p>
            <p>Sound Design</p>
            <p>SFX</p>
            <p>Music</p>
            <p>Sound Mix</p>
          </S.Content>
        </S.Item>
      </S.List>
    </div>
  )
}

export default Accordion
