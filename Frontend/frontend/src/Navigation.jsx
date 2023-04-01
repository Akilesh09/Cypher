import React from 'react';3

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: 'green', color: 'white' }}>
      <ul>
        <li><a href="#" style={{ color: 'gold' }}>Home</a></li>
        <li><a href="#" style={{ color: 'gold' }}>About</a></li>
        <li><a href="#" style={{ color: 'gold' }}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
