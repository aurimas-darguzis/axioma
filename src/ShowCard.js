import React from 'react'
import PropTypes, { string } from 'prop-types'

class ShowCard extends React.Component {
  render () {
    const { poster, title, year, description } = this.props.show
    return (
      <div>
        <img src={`/public/img/posters/${poster}`} alt={`${title}`} />
        <div>
          <h3>{title}</h3>
          <h4>({year})</h4>
          <p>{description}</p>
        </div>
      </div>
    )
  }
}

// https://facebook.github.io/react/docs/typechecking-with-proptypes.html
ShowCard.propTypes = {
  show: PropTypes.shape({
    poster: string,
    title: string,
    year: string,
    description: string
  })
}

// TODO: implement flow instead of propTypes
// https://flow.org/en/docs/frameworks/react/

export default ShowCard
