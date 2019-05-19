import React, { Component } from 'react';
import homeLogo from './home.png';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footerImgContainer">
          <img src={homeLogo} alt=""/>
        </div>
      </footer>
    )
  }
}
export default Footer;