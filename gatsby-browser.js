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
`

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    {element}
  </ThemeProvider>
)
