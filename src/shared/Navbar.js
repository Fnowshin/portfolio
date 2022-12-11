import React from 'react';

const Navbar = (props) => {
    return (
       <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">Naoshin </a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>About Me </a></li>
      <li><a href='https://drive.google.com/file/d/1nGGHhgsXql_FMJ0VRgSzUd3xO2-lu4oU/view?usp=sharing'>My Resume </a></li>
    </ul>
  </div>
</div>
    );
};

export default Navbar;