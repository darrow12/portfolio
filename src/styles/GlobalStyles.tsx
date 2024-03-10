import { createGlobalStyle } from 'styled-components'
import colorsStyle from './colors.style'
import fontsStyle from './fonts.style'

const GlobalStyles = createGlobalStyle`
  * {
    font-family: ${fontsStyle.secondaryFont}, sans-serif;
    color: ${colorsStyle.white};
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: ${colorsStyle.backgroundLight};

    &::-webkit-scrollbar {
      width: 3px;
    }

    &::-webkit-scrollbar-track {
      background: ${colorsStyle.veryDarkGray};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${colorsStyle.purple};
      border-radius: 20px;
    }
  }
`

export default GlobalStyles