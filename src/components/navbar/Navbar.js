import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [Active, setActive] = useState(false);

  const onClick = () => {
    setActive(!Active);
  };

  return (
    <>
      <div className="navPosition">
        <div className="navbar">
          <p>about</p>
          <p>services</p>
          <p>contact</p>
          <div onClick={onClick} className="menuBox">
            <p className="menuLineOne"></p>
            <p className="menuLineTwo"></p>
          </div>
        </div>
        <div className={`${Active && 'open'} navbarHidden`}>
          <p>about</p>
          <p>services</p>
          <p>contact</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
