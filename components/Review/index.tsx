import { shine } from '@/components/Effects'
import Heading from '@/components/Heading'
import Tags from '@/components/Tags'
import Timestamp from '@/components/Timestamp'
import Link from 'next/link'
import { useLayoutEffect, useState } from 'react'
import slugify from 'slugify'
import styled, { css } from 'styled-components'
import { ifNotProp, ifProp } from 'styled-tools'

const Wrapper = styled.figure`
  --dist: 0px;
  --gap: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: var(--bg);

  ${ifNotProp(
    'hero',
    css`
      cursor: pointer;

      &:not(:hover) {
        --dist: var(--gap);
      }
    `,
    css`
      margin: var(--gap) auto;
    `
  )}
`

const Photo = styled.div`
  position: relative;
  height: 0px;
  overflow: hidden;
  overflow: hidden;
  background: var(--loading) center top / cover no-repeat;

  ${ifNotProp(
    'hero',
    css`
      cursor: pointer;
      width: 100%;
      clip-path: inset(var(--dist));
      padding-top: calc(54% + var(--gs));
      transition: 0.2s;
    `,
    css`
      padding-top: 26vmax;
      background-attachment: fixed;
    `
  )}

  ${ifNotProp(
    'isLoaded',
    css`
      background-image: none !important;

      &:before,
      &:after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        transition: 0.3s;
      }

      &:before {
        background: var(--loading);
      }

      &:after {
        ${shine}
      }
    `,
    ifProp(
      'hero',
      css`
        &:before {
          content: '';
          display: block;
          position: absolute;
          top: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(
              ellipse at center,
              rgba(0, 0, 0, 0.2) 10%,
              rgba(0, 0, 0, 0.8) 100%
            ),
            linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.4) 5%,
              rgba(0, 0, 0, 0) 100%
            );
        }
      `
    )
  )}

  img {
    visibility: hidden;
  }

  ${Heading} {
    mix-blend-mode: difference;
    position: absolute;
    right: 0;
    left: 0;
    color: #fff;
    line-height: 1;
    font-family: 'st';
    text-align: center;
    margin: 0;

    ${ifNotProp(
      'hero',
      css`
        opacity: 0;
        bottom: calc(var(--dist) * -1);
        font-size: 2rem;
        transition: 0.2s;

        ${Wrapper}:hover & {
          opacity: 1;
          bottom: calc(var(--dist) + 1rem);
        }
      `,
      css`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        top: 0;
        bottom: 0;
        font-size: 4rem;
      `
    )}

    strong {
      display: block;
      font-family: 'mnn';
      letter-spacing: -0.2em;
      margin: 0 0 0.5em;
      padding: 0.5em 0.5em 0.4em;
      outline: 1px dashed;
      outline-offset: -0.3rem;
      background: var(--primary);
    }
  }
`

const Caption = styled.figcaption`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: calc(var(--gs) / 2);

  strong {
    display: block;
    font-size: 1rem;
    margin-top: calc(var(--gap) * -1);
    transition: 0.2s;

    ${Wrapper}:hover & {
      opacity: 0;
      transform: translate(0, -1em);
    }
  }

  div {
    font-size: 0.8rem;

    + div {
      margin-top: 0.7rem;
    }
  }
`

export default ({
  bg,
  title,
  released,
  style = [],
  types = [],
  hero = false
}: Props) => {
  const slug = slugify(title.toLowerCase())
  const [isLoaded, setLoaded] = useState(false)

  useLayoutEffect(() => {
    const im = new Image()
    im.onload = () => window.requestAnimationFrame(() => setLoaded(true))
    im.src = bg
  }, [bg])

  const C = ({ children }) =>
    hero ? (
      <>{children}</>
    ) : (
      <Link href={`/review?slug=${slug}`} as={`/review/${slug}`} passHref>
        <a>{children}</a>
      </Link>
    )

  return (
    <C>
      <Wrapper {...{ hero }}>
        <Photo
          style={{ backgroundImage: `url(${bg})` }}
          {...{ isLoaded, hero }}>
          <img src={bg} alt={title} />
          <Heading>
            {hero ? (
              <>
                <strong>{Math.random().toFixed(1)} / 1</strong>
                {title}
              </>
            ) : (
              title
            )}
          </Heading>
        </Photo>

        <Caption>
          {hero || (
            <div>
              <strong>{title}</strong>
            </div>
          )}

          <Tags tags={['3D', 'Fantasy']} />
          <Tags
            tags={['ELO', 'Arenas', 'Battlegrounds', 'World']}
            divider=" + "
          />

          <div>
            <Timestamp>November 23, 2004</Timestamp>
          </div>
        </Caption>
      </Wrapper>
    </C>
  )
}

interface Props {
  title: string
  bg: string
  hero?: boolean
  released?: Date
  style?: string[]
  types?: string[]
}
