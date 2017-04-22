import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './App.css'
import Landing from './Landing'

class App extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to='/'>Home</Link></li>
          </ul>
          <Route exact path='/' component={Landing} />
        </div>
      </Router>
    )
  }
}

export default App

//  <HashRouter>
//         <div className='App'>
//           <Match exactly pattern='/' component={Landing} />
//         </div>
//       </HashRouter>
