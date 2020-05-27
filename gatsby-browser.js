import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Theme from './src/themes/theme'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  body {
    font-family: ${props => props.theme.fonts.main}
  }
  img {
    max-width: 100%;
    max-height: 100%;
  }
`

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    {element}
  </ThemeProvider>
)
