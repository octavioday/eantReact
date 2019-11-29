import React from 'react'

class Base extends React.Component { // Los 4 mpétodos del ciclo de vida del componente

	// 1) Antes de "nacer" el componente.
	constructor(){ // Por defecto toma el constructor del React.Component, pero como ahora lo estoy defininendo, lo reemplaza por este
		super() // Con esto invoco al constructor padre de React.Component para luego agregarle lo que quiera.
		this.state = {}
	}


	// 2) Después de "montar" el componente en el Virtual DOM
	componentDidMount(){ // Ideal para operaciones sincrónicas (Iteraciones)

	}

	// 3) Mostrar el componente montado en el Real DOM
	render(){
    return <cite>Soy un componente base...</cite>
  }
}

export default Base