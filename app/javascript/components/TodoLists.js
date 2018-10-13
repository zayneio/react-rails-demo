import React, { Component } from 'react'
import axios from 'axios'

class TodoList extends Componenet{
	
	constructor(){
	  this.state = {
	  	todos: []
	  }
	}

	componentDidMount(){
		axios.get('http://localhost:3000/todos')
		.then( (data) => {
			this.setState({
				todos: data
			})
		})
	}

	render(){
		let todos
		todos = this.state.todos.map( (todo) => {
			return (
				<TodoItem todo={todo}/>

			)
		})
		return(
			<ul>
				{todos}
			</ul>
		)
	}
}