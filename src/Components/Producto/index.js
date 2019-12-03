import React from 'react'

class Producto extends React.Component { // Los 4 mpétodos del ciclo de vida del componente

	// 1) Antes de "nacer" el componente.
	constructor(){ // Por defecto toma el constructor del React.Component, pero como ahora lo estoy defininendo, lo reemplaza por este
		super() // Con esto invoco al constructor padre de React.Component para luego agregarle lo que quiera.
		this.state = {
			isLoaded : false
		}
	}

	// 2) Antes de "montar" el componente el componente en el Virtual DOM

	componentWillMount(){ // Ideal para operaciones asincrónicas

	}

	// 4) Mostrar el componente montado en el Real DOM
	  render(){ //<-- Se re-ejecuta cada vez que se ejecuta primero el setState()
	    if( !this.state.isLoaded ){

	      return <em>Cargando...</em>

	    } else {

	      return <cite>Soy un producto llamado {this.state.nombre} y valgo ARS{this.state.precio}...</cite>

	    }
	  }
}

export default Producto