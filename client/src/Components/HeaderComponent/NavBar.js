import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './user.png';
import SimpleMenu from './SimpleMenu';
import Login from './Login';

class NavBar extends Component {
  render() {
    return (
      <header>
        <div id="headerButtons">
			<div className="userLogo navBarButtons">
				<Login/>
			</div>
			<div className="burger navBarButtons">
				<SimpleMenu/>
			</div>
        </div>
      </header>
    )
  }
}
export default NavBar;
