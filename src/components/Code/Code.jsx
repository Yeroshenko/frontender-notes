import React from 'react'
import cn from 'classnames'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/oceanicNext'

import cls from './Code.module.sass'

export const Code = ({ codeString, language }) => (
  <Highlight {...defaultProps} code={codeString} language={language} theme={theme}>
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <div className={cls.gatsbyHighlight} data-language={language}>
        <pre className={cn(cls.highlightContent, className)} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      </div>
    )}
  </Highlight>
)
