import { NavLink } from "react-router-dom";
import "./navbar.css";



function NavBar() {


  return (
    <div>
      <nav>
        <NavLink to="/">home</NavLink> <br />
        <NavLink to="/about">about</NavLink> <br />
        <NavLink to="/projects">SEprojects</NavLink> <br />
        <NavLink to="/MechProjects">MEprojects</NavLink> <br />
        <NavLink to="/resume">resume</NavLink> <br />
        <NavLink to='/MarcelAI'>MarcelAI</NavLink>
        
      </nav>
    </div>
  );
}

export default NavBar;
