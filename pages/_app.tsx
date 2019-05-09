import '@/static/font/fonts.css'

import Header from '@/components/Header'
import pvpTheme, { flex } from '@/components/theme'
import App, { Container } from 'next/app'
import Head from 'next/head'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { font, palette } from 'styled-theme'

export default class extends App {
  public componentDidMount() {
    if ('browser' in process) {
      window.addEventListener('mousemove', this.handleMouseMove)
    }
  }

  public componentWillUnmount() {
    if ('browser' in process) {
      window.removeEventListener('mousemove', this.handleMouseMove)
    }
  }

  public handleMouseMove = ({ clientX: x, clientY: y }) =>
    ((window as any).mouse = { x, y })

  public render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <ThemeProvider theme={pvpTheme}>
          <>
            <Head>
              <title key="title">pvpreview | all games suck</title>
            </Head>

            <Header />
            <Component {...pageProps} />
            <GlobalStyles />
          </>
        </ThemeProvider>
      </Container>
    )
  }
}

const GlobalStyles = createGlobalStyle`
  :root {
    --g: 40;
    --gs: calc(100vw / var(--g));
  }

  * {
    box-sizing: border-box;
  }

  ::-webkit-scrollbar,
  ::-webkit-scrollbar-track {
    width: 5px;
    height: 5px;
    background: ${palette('primary', 1)};
  }

  ::-webkit-scrollbar-thumb {
    border: 1px solid ${palette('primary', 1)};
    background: ${palette('primary', 0)};
  }

  ::selection {
    color: ${palette('primary', 0)};
    background: ${palette('primary', 2)};
  }

  html, body {
    margin: 0;
    padding: 0;
  }

  html {
    color: ${palette('primary', 0)};
    font-size: ${flex(13, 32)};
    line-height: 1.75;
    font-family: ${font('primary')};
    background: ${palette('primary', 1)};
  }

  a {
    color: ${palette('primary', 1)};
    text-decoration: none;
  }
`
