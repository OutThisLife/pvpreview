import Modal from '@/components/Modal'
import { useCallback, useRef, useState } from 'react'
import ContentLoader from 'react-content-loader'
import ReactPlayer, { ReactPlayerProps } from 'react-player'
import styled, { css } from 'styled-components'
import { size } from 'styled-theme'
import { ifNotProp } from 'styled-tools'

const Wrapper = styled(Modal)`
  --w: 100%;
  --h: 50vw;

  @media (min-width: ${size('desktop')}) {
    --h: 100%;
  }

  &.open {
    --w: calc(100% - (var(--gs) * 2));

    @media (min-width: ${size('tablet')}) {
      --h: 65%;
    }
  }

  + div {
    margin-bottom: 1em;
  }

  > svg,
  > svg rect,
  > div {
    width: var(--w) !important;
    height: var(--h) !important;
  }

  ${ifNotProp(
    'isLoaded',
    css`
      > div {
        display: none;
      }
    `,
    css`
      > svg {
        display: none;
      }
    `
  )}
`

export default ({ url }: Props) => {
  const $player = useRef<ReactPlayerProps & any>()
  const $div = useRef<HTMLElement & any>()

  const [isLoaded, setLoaded] = useState<State['isLoaded']>(false)
  const [isBroken, setBroken] = useState<State['isBroken']>(false)

  const init = () =>
    typeof $player.current === 'object' &&
    'wrapper' in $player.current &&
    $player.current.wrapper instanceof HTMLElement

  const onPlay = useCallback(
    cb => {
      if ($div.current instanceof HTMLElement && init()) {
        const { clientWidth, clientHeight } = $player.current.wrapper

        $div.current.style.width = `${clientWidth}px`
        $div.current.style.height = `${clientHeight}px`
      }

      window.requestAnimationFrame(cb)
    },
    [$div, $player]
  )

  const onClose = useCallback(() => {
    if (init() && $player.current.player.isPlaying) {
      $player.current.player.player.stop()
    }

    if ($div.current instanceof HTMLElement) {
      $div.current.removeAttribute('style')
    }
  }, [$div, $player])

  const onReady = useCallback(() => setLoaded(true), [])
  const onError = useCallback(() => setBroken(true), [])

  if (isBroken) {
    return null
  }

  return (
    <>
      <Wrapper {...{ isLoaded, onClose }}>
        {({ toggle }) => (
          <>
            <ContentLoader>
              <rect x="0" y="0" rx="0" ry="0" />
            </ContentLoader>

            <ReactPlayer
              ref={$player}
              controls
              onPlay={() => onPlay(() => toggle(true))}
              {...{ url, onReady, onError, config }}
            />
          </>
        )}
      </Wrapper>

      <div ref={$div} />
    </>
  )
}

interface Props extends ReactPlayerProps {}

interface State {
  isLoaded: boolean
  isBroken: boolean
}

const config: Partial<ReactPlayerProps['config']> = {
  youtube: {
    playerVars: { modestbranding: 1 }
  }
}
