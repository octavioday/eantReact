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
/*
		setTimeout( () => {
			alert("Ya tenemos datos")
		},10000)

		this.setState ( {isLoaded : true} )
*/
		fetch("https://api.myjson.com/bins/1giaf3").then(rta =>{

			let datos = rta.json()

			datos.then( productos => {
/*
				this.setState( { 
					nombre : productos[0].nombre,
					stock : productos[0].stock,
					precio : productos[0].precio,
					disponible : productos[0].disponible
					})
*/
				productos[0].precio *= 69
				
				this.setState({ ...productos[0], isLoaded : true }) // Con los tres puntitos rompopo las propiedades del objeto y capturo todas
				
			})
		})
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