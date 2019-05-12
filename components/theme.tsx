import { tint } from 'polished'

const pvpTheme = {
  fonts: {
    primary:
      'mn, "Maison Neue", -apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",sans-serif',
    heading: 'st, Georgia, "Times New Roman", serif'
  },

  colours: {
    text: '#292929',
    bg: '#fff',
    primary: '#0000EE',
    secondary: '#FF2FCA',

    get inactive() {
      return tint(0.5, this.text)
    },

    get loading() {
      return tint(0.95, this.text)
    }
  },

  sizes: {
    maxWidth: '1600px',
    phone: '0px',
    tablet: '768px',
    desktop: '1024px'
  }
}

export const flex = (min, max, maxW = 2000) =>
  `calc(${min}px + ${max - min} * (100vw - 400px) / (${maxW} - 400))`

export type PvPTheme = typeof pvpTheme
export default pvpTheme
