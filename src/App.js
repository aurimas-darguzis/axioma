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
      <h1>Hey</h1>
    )
  }
}

export default App
