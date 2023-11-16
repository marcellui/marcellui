import { NavLink } from "react-router-dom";
import "./navbar.css";



function NavBar() {


  return (
    <div>
      <nav>
        <NavLink to="/">home</NavLink> <br />
        <NavLink to="/about">about</NavLink> <br />
        <NavLink to="/projects">projects</NavLink> <br />
        <NavLink to="/resume">resume</NavLink> <br />
        
      </nav>
    </div>
  );
}

export default NavBar;
