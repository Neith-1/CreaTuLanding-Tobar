import React from 'react';
import CartWidget from '..CartWidget/CartWidget';

const NavBar = () => {
  return (
    <nav>
      <h1>Mi tienda online</h1>
      <CartWidget />
    </nav>
  );
}

export default NavBar;