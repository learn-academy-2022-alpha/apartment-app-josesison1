import React, { Component } from 'react'
import Home from './pages/Home'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Apartments from './pages/Apartments'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header {...this.props} />
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Apartments" component={Apartments} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
