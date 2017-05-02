import React from 'react'
import { connect } from 'react-redux'
import ShowCard from './ShowCard'
import Header from './Header'

class Search extends React.Component {
  render () {
    return (
      <div>
        <Header showSearch />
        <div>
          {this.props.shows
            .filter((show) => `${show.title} ${show.description}`
                .toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0
            )
            .map((show) => {
              return (
                <ShowCard key={show.imdbID} {...show} />
              )
            })}
        </div>
      </div>
    )
  }
}

// const { string, shape, arrayOf } = React.PropTypes
import PropTypes from 'prop-types'
Search.propTypes = {
  shows: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string
  })),
  searchTerm: PropTypes.string
}

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(Search)

// When you want to debug json this is how you should do it:
// <pre><code>{JSON.stringify(preload, null, 4)}</code></pre>

// JSON.stringify parameters:
// 1st - the data you want to stringify
// 2nd - replacer function, actually goes into json and replace data. Usually you always put null as 2nd parameter
// 3rd - the desired indentation
