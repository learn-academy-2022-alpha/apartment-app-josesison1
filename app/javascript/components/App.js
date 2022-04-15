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
  constructor(props) {
    super(props)
    this.state = {
      apartments: []
    }
  }

  componentDidMount() {
    this.readApt()
  }

  readApt = () => {
    fetch("http://localhost:3000/apartments")
      .then(response => response.json())
      .then(aptArray => this.setState({ apartments: aptArray }))
      .catch(errors => console.log("Apartment read errors:", errors))

  }

  render() {
    return (
      <>
        <Router>
          <Header {...this.props} />
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Apartments" render={(props) => <Apartments apartments={this.state.apartments} />} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
