import React, { Component } from 'react'
import NewTherapist from './components/newTherapist'
import Import from './components/Import'
import UpdateTherapist from './components/UpdateTherapist'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <section>
        <Router>
          <Switch>
            <Route exact path="/" component={NewTherapist} />
            <Route exact path="/import" component={Import} />
            <Route
              exact
              path="/updateTherapist/:id"
              component={UpdateTherapist}
            />
          </Switch>
        </Router>
      </section>
    )
  }
}

export default App
