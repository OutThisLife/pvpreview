import '@/static/font/fonts.css'

import Grid from '@/components/Grid'
import pvpTheme, { flex } from '@/components/theme'
import styled, { createGlobalStyle, keyframes } from 'styled-components'
import { font, size } from 'styled-theme'

const spinner = keyframes`
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

export default createGlobalStyle`
  :root {
    --g: 40;
    --gs: calc(100vw / var(--g));
    --mw: ${size('maxWidth')};

    ${Object.entries(pvpTheme.colours).map(([k, v]) => `--${k}: ${v};`)};

    @media (max-width: ${size('tablet')}) {
      --gs: ${flex(30, 60)};
    }
  }

  * {
    box-sizing: border-box;
  }

  ::selection {
    color: var(--text);
    background: var(--secondary);
  }

  html, body {
    margin: 0;
    padding: 0;
  }

  html {
    color: var(--text);
    font-size: ${flex(13, 18)};
    line-height: 1.2;
    font-family: ${font('primary')};
    background: var(--bg);
  }

  .lock {
    overflow: hidden;
  }

  a {
    color: var(--text);
    text-decoration: none;
    transition: .2s;

    &:hover {
      color: var(--primary);
    }
  }

  h1,h2,h3,h4,h5,h6 {
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.01em;

    &:not(:first-child) {
      margin: 2em 0 0.5em;
    }
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.2rem;
  }

  figure {
    margin: 0;
    padding: 0;
  }

  img, iframe, svg {
    max-width: 100%;
    height: auto;
  }

  #nprogress {
    pointer-events: none;

    .bar {
      position: fixed;
      z-index: 1031;
      top: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: var(--primary);
    }

    .peg {
      opacity: 1.0;
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px var(--primary), 0 0 5px var(--primary);
      transform: rotate(3deg) translate(0px, -4px);
    }

    .spinner {
      display: block;
      position: fixed;
      z-index: 1031;
      top: 15px;
      right: 15px;
    }

    .spinner-icon {
      width: 18px;
      height: 18px;
      box-sizing: border-box;
      border: solid 2px transparent;
      border-top-color: var(--primary);
      border-left-color: var(--primary);
      border-radius: 50%;
      animation: ${spinner} .4s linear infinite;
    }
  }

  .nprogress-custom-parent {
    position: relative;
    overflow: hidden;

    .spinner, .bar {
      position: absolute;
    }
  }

  .nprogress-busy  {
    cursor: wait;

    * {
      pointer-events: none !important;
    }
  }
`

export const Wrapper = styled(Grid)`
  --sc: 2;

  padding: var(--gs) 0;
  min-height: 100vh;

  > ${Grid.Item} {
    grid-column: var(--sc) / calc(var(--sc) * -1);
  }

  @media (min-width: ${size('desktop')}) {
    --sc: 4;
  }
`

export { pvpTheme }
