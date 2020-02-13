import React, { Component } from 'react';
import sbLogo from '../../assets/SBlogo.webp';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="background-image">
          <div className="logo">
            <img className="sb-logo" src={sbLogo} alt="sb-logo" />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
