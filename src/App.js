import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './App.css'
import Landing from './Landing'
import Search from './Search'
import Details from './Details'

class App extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/search'>Search</Link></li>
          </ul>
          <Route exact path='/' component={Landing} />
          <Route path='/search' component={Search} />
          <Route path='/details/:id' component={Details} />
        </div>
      </Router>
    )
  }
}

export default App
