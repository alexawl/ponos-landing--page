import React from 'react';

const Navbar = () => {
  return (
    <nav className="teal lighten-1">
      <div className="nav-wrapper">
        <a href="" className="brand-logo left">Ponos</a>
        <a href="#" data-activates="mobile-demo" className="button-collapse right">
          <i className="material-icons">menu</i>
        </a>
        <ul id="mobile-demo" className="right hide-on-med-and-down">
          <li>
            <a href="">Empolyers</a>
          </li>
          <li>
            <a href="">Worker</a>
          </li>
          <li>
            <a href="">Sign in</a>
          </li>
            <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
