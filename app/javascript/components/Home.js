import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
	render () {
		return (
			<div className='home'>
				This is Home. Maybe It Will Work
				<div>	
					<Link to='/dashboard' className='dashboard'>
					  This is dashboard link
					</Link>
				</div>
				<div>	
					<Link to='/dashboard' className='dashboard'>
					  This is about us link
					</Link>				
				</div>	
				<div>	
					<Link to='/dashboard' className='dashboard'>
					  This is contact us link
					</Link>								
				</div>
			</div>
		)
	}
}

export default Home