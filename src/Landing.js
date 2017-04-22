import React from 'react'

const Landing = React.createClass({
  render () {
    return (
      <div>
        <h1>This is Landing component</h1>
        <input type='text' placeholder='Search' />
        <a>or Browse All</a>
      </div>
    )
  }
})

export default Landing
