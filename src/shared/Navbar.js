import React from 'react';
import { Link } from 'react-router-dom';
import pic from '../assets/logopic'

const Navbar = (props) => {
    return (
       <div className="navbar bg-base-100">
  <div className="flex-1">
    <img src={pic} alt="" />
    <Link to='/' className="btn btn-ghost normal-case text-xl">Naoshin </Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/aboutme'> About Me </Link></li>
      <li><a href='https://drive.google.com/file/d/1nGGHhgsXql_FMJ0VRgSzUd3xO2-lu4oU/view?usp=sharing'>My Resume </a></li>
    </ul>
  </div>
</div>
    );
};

export default Navbar;