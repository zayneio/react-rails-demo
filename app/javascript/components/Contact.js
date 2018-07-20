import React from 'react'
import { Route, Switch } from 'react-router-dom'

class Contact extends React.Component {
	render () {
		return (
			<div className='contact'>
				<h1>Contact Me</h1>
				<CotactFormContainer/>
			</div>
		)
	}
}

export default Contact