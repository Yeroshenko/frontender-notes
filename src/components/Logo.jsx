import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { LogoEl } from '../elements'

export const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.svg" }) {
        publicURL
      }
    }
  `)

  return <LogoEl src={data.logo.publicURL} alt='Logo' />
}
