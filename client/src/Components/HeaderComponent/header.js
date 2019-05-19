import React, { Component } from 'react';
import homeLogo from './home.png';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="headerImgContainer">
          <img src={homeLogo} alt=""/>
        </div>
      </header>
    )
  }
}
export default Header;