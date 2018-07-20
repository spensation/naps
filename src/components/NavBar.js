import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  /* Add basic styling for NavLinks */
  const link = {

    color: "white",
    fontWeight: 'bold',
    fontSize: '1.5em',
    width: '100px',
    padding: '15px',
    margin: '0 6px 6px',
    background: 'lime',
    textDecoration: 'none',
    border: '1px solid blue',
    borderRadius: '5px',
  }
  return (
    <div className="navbar">
      <NavLink
        className="navlink"
        to="/"
        /* set exact so it knows only to only set activeStyle when route is deeply equal to link */
        exact
        /* add styling to Navlink */
        style={link}
        /* add prop for activeStyle */
        activeStyle={{
          background: 'blue'
        }}
      >Home</NavLink>
      <NavLink
        className="navlink"
        to="/naps"
        exact
        style={link}
        activeStyle={{
          background: 'blue'
        }}
      >Naps</NavLink>
      <NavLink
        className="navlink"
        to="/new_nap"
        exact
        style={link}
        activeStyle={{
          background: 'blue'
        }}
      >New</NavLink>
      
    </div>

  );
};

export default NavBar;