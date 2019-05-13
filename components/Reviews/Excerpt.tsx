import Heading from '@/components/Heading'
import Tags from '@/components/Tags'
import Timestamp from '@/components/Timestamp'
import { ContentMeta } from '@/content'
import Link from 'next/link'
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
      margin: var(--gap) auto 0;

      @media (min-width: ${size('tablet')}) {
        margin: var(--gap) auto;
      }
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
  height: 0px;
  overflow: hidden;
  background: #000 center top / cover no-repeat;

  ${ifNotProp(
    'hero',
    css`
      cursor: pointer;
      clip-path: inset(var(--dist) var(--dist) 0);
      padding: calc(54% + var(--gs)) 0 0;
      transition: 0.2s;

      @media (min-width: ${size('tablet')}) {
        clip-path: inset(var(--dist));
      }
    `,
    css`
      padding: 45vmax 0 0;
      background-attachment: fixed;

      @media (min-width: ${size('tablet')}) {
        padding: 23vmax 0 0;
      }

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
    `
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
        font-size: 2rem;
        bottom: var(--dist);

        @media (min-width: ${size('desktop')}) {
          opacity: 0;
          bottom: calc(var(--dist) * -1);
          transition: 0.2s;

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
  hero = false,
  img,
  published,
  rating,
  slug,
  style = [],
  title,
  types = []
}: Props) => {
  const C = ({ children }) =>
    hero ? (
      children
    ) : (
      <Link href={`/review?slug=${slug}`} d={`/review/${slug}`} passHref>
        <a>{children}</a>
      </Link>
    )

  return (
    <Wrapper {...{ hero }}>
      <C>
        <Photo style={{ backgroundImage: `url(${img})` }} {...{ hero }}>
          <img src={img} alt={title} />

          <Heading>
            {hero ? (
              <>
                <strong>{rating} / 1</strong>
                {title}
              </>
            ) : (
              title
            )}
          </Heading>
        </Photo>

        <Caption {...{ hero }}>
          {hero || (
            <div>
              <strong>{title}</strong>
            </div>
          )}

          {style.length > 0 && <Tags tags={style} />}
          {types.length > 0 && <Tags tags={types} divider=" + " />}

          {published && (
            <div>
              <Timestamp date={published} />
            </div>
          )}
        </Caption>
      </C>
    </Wrapper>
  )
}

export interface Props extends ContentMeta {
  hero?: boolean
}
