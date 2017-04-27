import React from 'react'
import { Link } from 'react-router'

class Header extends React.Component {
  render () {
    return (
      <header>
        <h1>
          <Link to='/'>
            Axioma
          </Link>
        </h1>
      </header>
    )
  }
}

export default Header
