import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { preToCodeBlock } from 'mdx-utils'

import { App, Table, Code, Link } from 'components'

const components = {
  table: Table,
  a: Link,
  pre: preProps => {
    const props = preToCodeBlock(preProps)

    if (props) return <Code {...props} />

    return <pre {...preProps} />
  }
}

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>
    <App>{element}</App>
  </MDXProvider>
)