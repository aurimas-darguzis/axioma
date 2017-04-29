import React from 'react'
import { Link } from 'react-router'

class Header extends React.Component {
  render () {
    let utilSpace
    if (this.props.showCard) {
      utilSpace = <input onChange={this.props.handleSearchChange} value={this.props.searchTerm} type='text' placeholder='Search' />
    } else {
      utilSpace = (
        <h2>
          <Link to='/search'>
            Back
          </Link>
        </h2>
      )
    }
    return (
      <header>
        <h1>
          <Link to='/'>
            Axioma
          </Link>
        </h1>
        { utilSpace }
      </header>
    )
  }
}

// const { func, bool, string } = React.PropTypes
// import { func, bool, string } from 'prop-types'
import PropTypes from 'prop-types'
Header.propTypes = {
  handleSearchTermChange: PropTypes.func,
  showSearch: PropTypes.bool,
  searchTerm: PropTypes.string
}

export default Header
