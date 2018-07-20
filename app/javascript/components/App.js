import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import Dashboard from './Dashboard'
import Contact from './Contact'

class App extends React.Component {
	render () {
		return (
			<div className='zayne'>
	        	<Switch>
          			<Route exact path='/' component={Home} />
          			<Route exact path='/dashboard' component={Dashboard} />
        		</Switch>
			</div>
		)
	}
}

export default App