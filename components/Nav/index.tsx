import Grid from '@/components/Grid'
import Heading from '@/components/Heading'
import Rating from '@/components/Rating'
import lerp from '@/lib/lerp'
import { timer } from 'd3'
import { shade, transparentize } from 'polished'
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'
import { withProp } from 'styled-tools'

const Wrapper = styled(Grid.Item)`
  position: relative;
  width: 100%;
  height: 100vh;
  margin: auto;
  overflow: hidden;
  padding: 0 calc(var(--gs) * 4);

  &:after {
    content: '';
    z-index: -1;
    pointer-events: none;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: radial-gradient(
        ellipse at center,
        ${withProp(palette('primary', 2), transparentize(0.8))} 10%,
        ${withProp(palette('primary', 2), transparentize(0.2))} 100%
      ),
      linear-gradient(90deg, ${palette('primary', 2)} 5%, transparent 100%);
  }
`

const Link = styled(props => <Heading as="a" href="javascript:;" {...props} />)`
  display: block;
  width: 100%;
  padding: calc(var(--gs) / 2) var(--gs);

  > span {
    color: ${palette('primary', 0)};
    transition: color 0.45s;
  }

  > div[style] {
    opacity: 0.7;
    z-index: -1;
    pointer-events: none;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: center / cover no-repeat;
    transition: 0.45s;
  }

  &:not(.active) {
    > span {
      color: ${withProp(palette('primary', 0), shade(0.7))};
    }

    > div[style] {
      opacity: 0;
    }
  }
`

export default () => {
  const $wrapper = useRef<HTMLElement>()
  const [idx, setIdx] = useState(0)

  let tm = {}

  const loop = () => {
    if (!($wrapper.current instanceof HTMLElement && 'mouse' in window)) {
      return
    }

    const { y } = (window as any).mouse
    const { scrollTop, scrollHeight } = $wrapper.current
    const h = window.innerHeight
    const r = y / 2 / h

    $wrapper.current.scrollTop = lerp(
      scrollTop,
      Math.min(scrollHeight, scrollHeight * r)
    )
  }

  useEffect(() => {
    if ($wrapper.current instanceof HTMLElement) {
      tm = timer(loop)
    }

    return () => {
      if ('stop' in tm) {
        tm.stop()
      }

      setIdx(0)
    }
  }, [])

  return (
    <Wrapper ref={$wrapper} as="nav" column justify="space-evenly">
      {reviews.map((r, i) => (
        <Link
          key={r.title}
          className={idx === i ? 'active' : ''}
          onMouseEnter={() => setIdx(i)}>
          <span>
            {r.title}
            <Rating v={r.v} />
          </span>

          <div
            style={{
              backgroundImage: `url(${r.bg})`
            }}
          />
        </Link>
      ))}
    </Wrapper>
  )
}

const reviews = [
  {
    title: 'World of Warcraft',
    v: 0.5,
    bg: '/static/img/bg-wow.jpg'
  },
  {
    title: 'League of Legends',
    v: 0.2,
    bg: '/static/img/bg-lol.jpg'
  },
  {
    title: 'Black Desert',
    v: 0.75,
    bg: '/static/img/bg-bdo.jpg'
  }
]
