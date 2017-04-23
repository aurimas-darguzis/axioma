import React from 'react'

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

export default ShowCard
