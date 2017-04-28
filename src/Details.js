import React from 'react'
import axios from 'axios'
import Header from './Header'

class Details extends React.Component {
  constructor (props) {
    super (props)

    this.state = {
      omdbData: {}
    }
  }
  componentDidMount () {
    axios.get(`http://www.omdbapi.com/?=${this.props.show.imdbID}`)
  }
  render () {
    const { title, description, year, poster, trailer } = this.props.show
    return (
      <div>
        <Header />
        <section>
          <h1>{title}</h1>
          <h2>({year})</h2>
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
  })
}

export default Details


// <pre><code>
//   {JSON.stringify(this.props, null, 4)}
// </code></pre>