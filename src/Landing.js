import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { setSearchTerm } from './actionCreators'
import logo from './logo.svg'
import './App.css'

class Landing extends React.Component {
  handleSearchTermChange (event) {
    this.props.dispatch(setSearchTerm(event.target.value))
  }
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Axioma</h2>
        </div>

        <div>
          <h1>This is Landing component</h1>
          <input onChange={this.handleSearchTermChange} value={this.props.searchTerm} type='text' placeholder='Search' />
          <Link to='/search' >or Browse All</Link>
        </div>
      </div>
    )
  }
}

import PropTypes from 'prop-types'
Landing.propTypes = {
  searchTerm: PropTypes.string,
  dispatch: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}
export default connect(mapStateToProps)(Landing)
