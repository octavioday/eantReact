import React from 'react'
import './App.css'

import Logo from './Components/Logo'
import Menu from './Components/Menu'
import Mapa from './Components/Mapa'
import Video from './Components/Video'

const links = [
  {
    url : "https://reactjs.org",
    blank : true,
    text : "Documentation"
  },
  {
    url : "https://reactjs.org/tutorial/tutorial.html",
    blank : false,
    text : "Tutorial"
  },
  {
    url : "https://angular.io/docs",
    blank : true,
    text : "The Dark Side of the JS"
  }
]

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Logo category="sports" />
          <p>Edit <code>src/App.js</code> and save to reload.</p>
          { /* DESAFIO I: */ }
          <Menu items={links} />

          { /* DESAFIO II: */ }
          <Mapa lat="-34.6078602" long="-58.383111" zoom="15" />

          { /* DESAFIO II: */ }
          <Video id="yi1oDRDQvlo" play="yes" />

        </header>
      </div>
    )
  }
}
export default App