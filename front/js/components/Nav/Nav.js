import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Nav = (props) => {
  const { logoutUser } = props;
  return (
    <nav>
      <Link to="/dashboard">home</Link>
      <span>
        <NavLink to="/projects"> projects </NavLink>
        <NavLink to="/settings"> settings </NavLink>
        <NavLink to="/" onClick={logoutUser}>logout</NavLink>
      </span>
    </nav>
  );
};

export default Nav;
