import React from 'react'
import { Route, Switch } from 'react-router-dom'

class ContactForm extends React.Component {
	constructor (props) {
		super(props)
	}

	render () {
		return (
			<div className='contactForm'>
				<form>
					<input type="text" name="name"/>
					<input type="text" name="email"/>
					<input type="text" name="subject"/>
					<input type="Submit" value="Sbumit"/>			
				</form>
			</div>
		)
	}
}

export default ContactForm