import React from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'

class ShowCard extends React.Component {
  render () {
    const { poster, title, year, description, imdbID } = this.props
    return (
      <Link to={`/details/${imdbID}`}>
        <div>
          <img src={`/public/img/posters/${poster}`} alt={`${title}`} />
          <div>
            <h3>{title}</h3>
            <h4>({year})</h4>
            <p>{description}</p>
          </div>
        </div>
      </Link>
    )
  }
}

// https://facebook.github.io/react/docs/typechecking-with-proptypes.html
ShowCard.propTypes = {
  poster: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.string,
  description: PropTypes.string,
  imdbID: PropTypes.string
}

// TODO: implement flow instead of propTypes
// https://flow.org/en/docs/frameworks/react/

export default ShowCard
