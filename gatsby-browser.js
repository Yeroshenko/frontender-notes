import React from 'react'

import { App } from 'components'

export const wrapRootElement = ({ element }) => (
  <App>{element}</App>
)