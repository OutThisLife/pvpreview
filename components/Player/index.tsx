import Flex from '@/components/Flex'
import { useCallback, useEffect, useRef, useState } from 'react'
import ReactPlayer, { ReactPlayerProps } from 'react-player'
import styled, { css } from 'styled-components'
import { ifProp } from 'styled-tools'

const Wrapper = styled(Flex)`
  ${ifProp(
    'isOpen',
    css`
      z-index: 1000;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.9);
    `
  )}

  iframe {
    height: 100%;
  }
`

export default (props: ReactPlayerProps) => {
  const $player = useRef()
  const [isOpen, toggle] = useState(false)
  const [{ w, h }, setDimensions] = useState({ w: 0, h: 0 })

  const width = isOpen ? '70%' : '100%'
  const height = width

  const config = {
    youtube: {
      playerVars: { modestbranding: 1 }
    }
  }

  useEffect(() => {
    document.body.classList[isOpen ? 'add' : 'remove']('lock')

    try {
      if (!isOpen && $player.current.player.isPlaying) {
        $player.current.player.player.stop()
      }
    } catch (err) {
      console.warn(err)
    }
  }, [isOpen])

  const onPlay = useCallback(() => {
    if ($player.current.wrapper instanceof HTMLElement) {
      setDimensions({
        w: `${$player.current.wrapper.clientWidth}px`,
        h: `${$player.current.wrapper.clientHeight}px`
      })
    }

    toggle(true)
  }, [])

  const onClick = useCallback(() => toggle(!isOpen), [isOpen])

  return (
    <>
      <Wrapper {...{ isOpen, onClick }}>
        <ReactPlayer
          ref={$player}
          controls
          {...{ onPlay, width, height, config }}
          {...props}
        />
      </Wrapper>

      {isOpen && <div style={{ width: w, height: h }} />}
    </>
  )
}
