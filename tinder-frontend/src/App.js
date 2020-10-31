import React from 'react'
import './App.css'
import Header from './Header'
import TinderCards from './TinderCards'
import SwipeButtons from './SwipeButtons'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

function App() {
  return (
    // BEM naming convention
    <div className="app">
      <Header />
      <Router>
        <Switch>
          <Route path='/chat'>
            {/* Chat screen */}
            {/* Individual chat screen */}
          </Route>
          <Route path='/'>
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
