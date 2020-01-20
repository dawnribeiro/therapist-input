import React, { Component } from 'react'
import NewTherapist from './components/newTherapist'
import Import from './components/Import'
import UpdateTherapist from './components/UpdateTherapist'
import NavMenu from './components/NavMenu'
import Home from './components/Home'
import AllTherapists from './components/AllTherapists'
import Search from './components/Search'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <section>
        <Router>
          <NavMenu />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/newTherapist" component={NewTherapist} />

            <Route exact path="/import" component={Import} />
            <Route exact path="/all" component={AllTherapists} />
            <Route
              exact
              path="/updateTherapist/:id"
              component={UpdateTherapist}
            />
            <Route exact path="/search" component={Search} />
          </Switch>
        </Router>
      </section>
    )
  }
}

export default App
