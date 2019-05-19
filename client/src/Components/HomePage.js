import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import homeLogo from './homeLogo.png';
import arrowLogo from './arrow.jpg';


class HomePage extends Component {
  render() {
		
    return (
		<div className="bodyContainer">
			<div >
				<img src={homeLogo} alt=""/>
			</div>
			<div>
				Find your perfect trip, designed by insiders who konw and love their cities.
			</div>
			<div>
				<h2>
					Start browsing
				</h2>
				<Link to="/cities">
					<img src={arrowLogo} alt=""/>
				</Link>
			</div>
			<div className="buildOwn">
				Want to build your own Mytinerary?
				<div className="linkContainer">
					<Link to="/">
						Log in
					</Link>
					<Link to="/">
						Create Account
					</Link>
				</div>
				
			</div>
		</div>
    )
  }
}
export default HomePage;