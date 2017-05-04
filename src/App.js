import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css'
import { Provider } from 'react-redux'
import store from './store'
import Landing from './Landing'
import Search from './Search'
import Details from './Details'
import preload from '../public/data'

class App extends React.Component {
  render () {
    return (
        <Provider store={store}>
          <div>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/search'>Search</Link></li>
            </ul>
            <Route exact path='/' component={Landing} />
            <Route
              path='/search'
              component={(props) => <Search shows={preload.shows} {...props} />}

            />
            <Route
              path='/details/:id'
              component={(props) => {
                const shows = preload.shows.filter((show) => props.params.id === show.imdbID)
                return <Details show={shows[0]} {...props} />
              }
              }
            />
          </div>
        </Provider>
    )
  }
}

export default App
