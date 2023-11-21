import { useEffect , useState} from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

function Projects() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    document.title = "marcel's projects ";
  }, []);

  useEffect(() => {
    const getProjects = async () => {
        const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/projects`);
        setProjects(data);
        console.log(data)
    };
        getProjects();
    
} ,[]);
  

  return (
    <div>
      <p>
        here are some of my projects, find the rest on my{" "}
        <a href="https://github.com/marcellui" class="clickable">
          github
        </a>{" "}
      </p>
      <hr class="dashed" />
      <p>
        <NavLink to="/MarcelAI" class="clickable">
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
