import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import Contacts from './Contacts'
// import About from './About'

class App extends React.Component {
	render () {
		return (
			<div>
				<Switch>
					<Route exact path="/" component={Home} />			
					<Route exact path="/contact" component={Contacts} />	
				</Switch>
			</div>
		)
	}
}

export default App