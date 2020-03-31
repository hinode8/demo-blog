// Imports
import React from 'react'
import { Link } from 'react-router-dom'

// UI Imports
import { secondary, tertiary } from '../../../ui/common/fonts'
import { textLevel2 } from '../../../ui/common/shadows'

// App Imports
import home from '../../../setup/routes/home'

// Component
const Logo = (props) => {
  const { ...others } = props

  return (
    <Link to={home.home.path} {...others}>
      <span style={{ fontFamily: tertiary, fontSize: '4em', color: 'white', textShadow: textLevel2 }}>Juice</span>
    </Link>
  )
}

export default Logo
