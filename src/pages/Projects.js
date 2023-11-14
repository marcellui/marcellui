import { useEffect } from "react";
import { NavLink } from "react-router-dom";

function Projects() {
  useEffect(() => {
    document.title = "quinn's projects ( ´ ▽ ` )b";
  }, []);

  return (
    <div>
      <p>
        here are some of my projects, find the rest on my{" "}
        <a href="https://github.com/marcellui" class="clickable" target="_blank">
          github
        </a>{" "}
      </p>
      <hr class="dashed" />
      <p>
        <NavLink to="/marcel-ai" class="clickable">
          <u>
            <b>marcel ai</b>
          </u>
        </NavLink>{" "}
        <br />
        talk to an ai version of me (try it out)!
      </p>
      <p>
        <NavLink to="/" class="clickable">
          <u>
            <b>personal website</b>
          </u>
        </NavLink>{" "}
        <br />
        what you are looking at right now
      </p>
      
     
      
     
      

     
    </div>
  );
}

export default Projects;
