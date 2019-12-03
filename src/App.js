import React from 'react'
import './App.css'

import Logo from './Components/Logo'
import Menu from './Components/Menu'
import Mapa from './Components/Mapa'
import Video from './Components/Video'
import Producto from './Components/Producto'

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

  constructor(){
    super()
    this.state = {
      isLoaded : false
    }
  }

  componentDidMount(){
    // fetch( OBTENCION ).then( CONVERSION ).then( UTILIZACION )
    fetch("https://api.myjson.com/bins/1giaf3").then( rta => rta.json() ).then( data => {
      this.setState( { productos : data , isLoaded: true } )
    })

  }

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
          <Video id="yi1oDRDQvlo" play="no" />

          { !this.state.isLoaded ? <p>Cargando...</p> : <Producto /> } 
         
        </header>
      </div>
    )
  }
}
export default App