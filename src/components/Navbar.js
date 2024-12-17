import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Zee News</h1>
      <input type="text" id="name" name="name" required minlength="4" maxlength="80"  placeholder='search'/>

      <ul>
        <li>Home</li>
        <li>India</li>
        <li>World</li>
        <li>Sports</li>
        <li>Entertainment</li>
        <li>Business</li>
        <li>Tech</li>
      </ul>
    </nav>
  );
};

export default Navbar;
