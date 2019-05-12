import Footer from '@/components/Footer'
import Grid from '@/components/Grid'
import Header from '@/components/Header'
import App, { Container } from 'next/app'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'
import { ThemeProvider } from 'styled-components'

import GlobalStyles, { pvpTheme, Wrapper } from './_styles'

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

            <Wrapper>
              <Grid.Item>
                <Header />
              </Grid.Item>

              <Grid.Item as="main">
                <Component {...pageProps} />
              </Grid.Item>

              <Grid.Item>
                <Footer />
              </Grid.Item>
            </Wrapper>

            <GlobalStyles />
          </>
        </ThemeProvider>
      </Container>
    )
  }
}

Router.events.on('routeChangeStart', NProgress.start.bind(NProgress))
Router.events.on('routeChangeComplete', NProgress.done.bind(NProgress))
Router.events.on('routeChangeError', NProgress.done.bind(NProgress))
