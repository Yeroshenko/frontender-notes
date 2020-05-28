import React from 'react'

import { ThemeProvider } from 'context'
import 'styles/index.sass'

export const App = ({ children }) =>
  <ThemeProvider>{children}</ThemeProvider>
