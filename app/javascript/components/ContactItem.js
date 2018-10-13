import React from 'react'

class ContactItem extends React.Component {
	render(){
		return(
			<li>{this.props.contact.first_name}</li>
		)
	}
}

export default ContactItem