import React from 'react'
import axios from 'axios'

const csrfToken = document.querySelector('[name="csrf-token"]').content;
axios.defaults.headers.common['X-CSRF-Token'] = csrfToken;

class Contact extends React.Component {
	handleSubmit(e){
		let message = e.target.elements[0].value
		axios.post('/contact', `message=${message}`)
		.then( (data) => {
			debugger
		})
	}
	handleChange(e){

	}
	render(){
		return(
			<div className="container" style={{padding: '40px 0'}}>
				<div className="row">
					<div className="col-md-8 offset-md-2">
						<div>This is the Contact page. Please leave me a message, and I'll get back to you as soon as I can. Thanks!</div>
						<form onSubmit={this.handleSubmit.bind(this)}>
							<input ref="message" type="text" placeholder="enter message here" onChange={this.handleChange.bind(this)} className="form-control"/>
							<button type="submit" className="btn btn-primary">Send Message</button>
						</form>
					</div>
				</div> 
			</div>
		)
	}
}

export default Contact