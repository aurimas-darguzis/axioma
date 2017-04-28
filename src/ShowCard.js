import React from 'react'
import { Link } from 'react-router'
import { string } from 'prop-types'

class ShowCard extends React.Component {
  render () {
    const { poster, title, year, description } = this.props
    return (
      <Link to={`/details/${this.props.imdbID}`}>
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
  poster: string,
  title: string,
  year: string,
  description: string
}

// TODO: implement flow instead of propTypes
// https://flow.org/en/docs/frameworks/react/

export default ShowCard
