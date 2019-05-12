import { css, keyframes } from 'styled-components'

const slide = keyframes`
0% { transform: translateX(-100%) }
100% { transform: translateX(100%) }
`

export const shine = css`
  content: '';
  display: block;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  animation: ${slide} 1s infinite;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.8) 50%,
    rgba(128, 186, 232, 0) 99%,
    rgba(125, 185, 232, 0) 100%
  );
`
