import React, { Component } from 'react'
import NewTherapist from './components/newTherapist'
import Import from './components/Import'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <section>
        <Router>
          <Switch>
            <Route exact path="/" component={NewTherapist} />
            <Route exact past="/import" component={Import} />
          </Switch>
        </Router>
      </section>
    )
  }
}

export default App
