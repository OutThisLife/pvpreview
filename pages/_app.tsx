import App, { Container } from 'next/app'
import Head from 'next/head'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { palette, theme } from 'styled-tools'

export default class extends App {
  public render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <ThemeProvider theme={pvpTheme}>
          <>
            <Head>
              <title key="title">pvpreview | all games suck</title>
            </Head>

            <Component {...pageProps} />
            <GlobalStyles />
          </>
        </ThemeProvider>
      </Container>
    )
  }
}

const pvpTheme = {
  font: 'Nanum Gothic Coding, sans-serif',

  palette: {
    base: '#000',
    bg: '#fff',
    primary: '#00f'
  },
}

const GlobalStyles = createGlobalStyle`
  :root {
    --g: calc(100vw / 40);
  }

  * {
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    width: 3px;
    height: 3px;
    background: ${palette('primary')};
  }

  ::-webkit-scrollbar-track {
    background: ${palette('primary')};
  }

  ::-webkit-scrollbar-thumb {
    background: ${palette('bg')};
  }

  ::selection {
    color: ${palette('bg')};
    background: ${palette('primary')};
  }

  html {
    color: ${palette('base')};
    font-size: var(--g);
    line-height: 1.75;
    font-family: ${theme('font')};
  }

  body {
    background: ${palette('bg')};
  }
`

export type PvPTheme = typeof pvpTheme
