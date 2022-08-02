import React from 'react'
import { LayoutWrapper } from './LayoutSty'

const Layout = ({children}) => {
  return (
    <LayoutWrapper>{ children }</LayoutWrapper>
  )
}

export default Layout