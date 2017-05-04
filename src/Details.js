import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { getOMDBDetails } from './actionCreators'
import Header from './Header'

class Details extends React.Component {
  componentDidMount () {
    if (!this.props.omdbData.imdbRating) {
      this.props.dispatch(getOMDBDetails(this.props.show.imdbID))
    }
  }
  render () {
    const { title, description, year, poster, trailer } = this.props.show
    let rating
    if (this.props.omdbData.imdbRating) {
      rating = <h3>{this.props.omdbData.imdbRating}</h3>
    } else {
      rating = 'put some loading spinner inside <img /> tag'
    }
    return (
      <div>
        <Header />
        <section>
          <h1>{title}</h1>
          <h2>({year})</h2>
          rating: {rating}
          <img src={`/public/img/posters/${poster}`} alt='you should always put value in alt tag :)' />
          <p>{description}</p>
        </section>
        <div>
          <iframe src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;contorls=0&amp;showinfo=0`} frameBorder='0' allowFullScreen />
        </div>
      </div>
    )
  }
}

import PropTypes from 'prop-types'

Details.propTypes = {
  show: PropTypes.shape({
    title: PropTypes.string,
    year: PropTypes.string,
    poster: PropTypes.string,
    trailer: PropTypes.string,
    description: PropTypes.string,
    imdbID: PropTypes.string
  }),
  omdbData: PropTypes.shape({
    imdbID: PropTypes.string
  }),
  dispatch: PropTypes.func
}

const mapStateToProps = (state, ownProps) => {
  const omdbData = state.omdbData[ownProps.show.imdbID] ? state.omdbData[ownProps.show.imdbID] : {}
  return {
    omdbData
  }
}

export default connect(mapStateToProps)(Details)

// <pre><code>
//   {JSON.stringify(this.props, null, 4)}
// </code></pre>
