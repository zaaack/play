import React, { HTMLAttributes } from 'react'
import Highlight from 'react-highlight'
import 'highlight.js/scss/github-dark-dimmed.scss'
export interface Props extends React.DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>, React.PropsWithChildren {
  lang?: string
}

export function Code({children, lang,  className,...props}: Props) {
  return (
    <Highlight {...props} className={`${className} languange-${lang || 'css'}`}>{children}</Highlight>
  )
}
