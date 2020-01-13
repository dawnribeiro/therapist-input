import React, { Component } from 'react'
import NewTherapist from './components/newTherapist'
import Import from './components/Import'

class App extends Component {
  render() {
    return (
      <section>
        <NewTherapist />
        <Import />
      </section>
    )
  }
}

export default App
