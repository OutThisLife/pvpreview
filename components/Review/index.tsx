import Heading from '@/components/Heading'
import Tags from '@/components/Tags'
import Timestamp from '@/components/Timestamp'
import Link from 'next/link'
import { useLayoutEffect, useState } from 'react'
import ContentLoader from 'react-content-loader'
import slugify from 'slugify'
import styled, { css } from 'styled-components'
import { size } from 'styled-theme'
import { ifNotProp } from 'styled-tools'

const Wrapper = styled.figure`
  --dist: 0px;
  --gap: var(--gs);

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
  )};

  > a {
    display: block;
    width: 100%;

    &:hover {
      color: initial;
    }
  }
`

const Photo = styled.div`
  position: relative;
  width: 100%;
  background: var(--loading) center top / cover no-repeat;

  @media (min-width: ${size('tablet')}) {
    height: 0px;
    overflow: hidden;
  }

  ${ifNotProp(
    'hero',
    css`
      cursor: pointer;
      clip-path: inset(var(--dist) var(--dist) 0);
      transition: 0.2s;

      @media (min-width: ${size('tablet')}) {
        clip-path: inset(var(--dist));
        padding: calc(54% + var(--gs)) 0 0;
      }
    `,
    css`
      padding: 10vmax 0;
      background-attachment: fixed;

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
          linear-gradient(180deg, rgba(0, 0, 0, 0.4) 5%, rgba(0, 0, 0, 0) 100%);
      }

      @media (min-width: ${size('tablet')}) {
        padding: 23vmax 0 0;
      }
    `
  )}

  svg {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    max-width: none;
    min-width: 100%;
    height: calc(100% + 1px);
  }

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
        font-size: 2rem;
        bottom: var(--dist);

        @media (min-width: ${size('desktop')}) {
          opacity: 0;
          transition: 0.2s;
          bottom: calc(var(--dist) * -1);

          ${Wrapper}:hover & {
            opacity: 1;
            bottom: calc(var(--dist) + 1rem);
          }
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

  ${ifNotProp(
    'hero',
    css`
      padding: calc(var(--gs) / 2);
    `,
    css`
      padding: var(--gap) 0 0;
    `
  )}

  strong {
    display: none;
    font-size: 1rem;
    margin-top: calc(var(--gap) * -1);
    transition: 0.2s;

    ${Wrapper}:hover & {
      opacity: 0;
      transform: translate(0, -1em);
    }

    @media (min-width: ${size('desktop')}) {
      display: block;
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

  const C = ({ children }) =>
    hero ? (
      children
    ) : (
      <Link href={`/review?slug=${slug}`} as={`/review/${slug}`} passHref>
        <a>{children}</a>
      </Link>
    )

  useLayoutEffect(() => {
    const im = new Image()
    im.onload = () => window.requestAnimationFrame(() => setLoaded(true))
    im.src = bg

    if (im.complete) {
      setLoaded(true)
    }
  }, [bg])

  return (
    <Wrapper {...{ hero }}>
      <C>
        <Photo
          style={{ backgroundImage: `url(${bg})` }}
          {...{ isLoaded, hero }}>
          {!isLoaded ? (
            <ContentLoader>
              <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
            </ContentLoader>
          ) : (
            <>
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
            </>
          )}
        </Photo>

        <Caption {...{ hero }}>
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
      </C>
    </Wrapper>
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
