import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import cls from './Logo.module.sass'

export const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.svg" }) {
        publicURL
      }
    }
  `)

  return <img className={cls.logo} src={data.logo.publicURL} alt='Logo' />
}
