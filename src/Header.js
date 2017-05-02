import React from 'react'
import { connect } from 'react-redux'
import { setSearchTerm } from './actionCreators'
import { Link } from 'react-router'

class Header extends React.Component {
  constructor (props) {
    super(props)

    // making sure Header is `this`.
    // Other words - `this` is always refering to Header Component
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
  }
  handleSearchTermChange (event) {
    this.props.dispatch(setSearchTerm(event.target.value))
  }
  render () {
    let utilSpace
    if (this.props.showCard) {
      utilSpace = <input onChange={this.handleSearchTermChange} value={this.props.searchTerm} type='text' placeholder='Search' />
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
  dispatch: PropTypes.func,
  showSearch: PropTypes.bool,
  searchTerm: PropTypes.string
}

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(Header)
