import React from 'react';

// Images
import Logo from '../static/images/logo.png';

const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="logo-img"/>
    </div>
  )
}

export default Header;
