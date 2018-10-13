import React from 'react'
import ContactItem from './ContactItem'
import axios from 'axios'

class Contact extends React.Component {
	constructor(){
		super();
		this.state = {
			contacts: []
		}
	}

	componentDidMount(){
		let response
		axios.get('http://localhost:3000/contacts')
		.then( (response) => {
			this.setState({
				contacts: response.data
			})
		})
		.catch( (resp) => {})
	}

	handleSubmit(e){
		e.preventDefault()
		let contact = {
			first_name: e.target.elements[0].value,
			last_name: e.target.elements[1].value,
			phone: e.target.elements[2].value
		}
		debugger
		// axios.post('localhost:3000/contacts/new', `first_name=${}`)
		// console.log(e)
	}

	render(){
		let contacts
		if (this.state.contacts)
			contacts = this.state.contacts.map( (contact, index) => {
			return (
				<ContactItem contact={contact} key={index}/>
			)
		})
		return(
			<div className="contacts">
				<form onSubmit={this.handleSubmit.bind(this)}>
					<input type="text" name="first_name" />
					<input type="text" name="last_name" />
					<input type="text" name="phone" />
					<input type="submit" value="Submit" />
				</form>
				<ul>
					{contacts}
				</ul>
			</div>
		)
	}
}

export default Contact