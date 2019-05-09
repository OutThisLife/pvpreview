const pvpTheme = {
  fonts: {
    primary:
      'mn, "Maison Neue", -apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",sans-serif'
  },

  palette: {
    primary: ['#fff', '#000', '#000']
  }
}

export const flex = (min, max, maxW = 2000) =>
  `calc(${min}px + ${max - min} * (100vw - 400px) / (${maxW} - 400))`

export type PvPTheme = typeof pvpTheme
export default pvpTheme
