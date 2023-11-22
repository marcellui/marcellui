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
        <NavLink to="/marcelAI" class="clickable">
          <u>
            <b>marcel AI</b>
          </u>
        </NavLink>{" "}
        <br />
        talk to an AI version of me!
      </p>
      <p>
        { projects.map(project => {
          return (
            <>
            <u><a href={project.repo_link}><b>{project.project_name}</b></a></u>
            <br/>
            <p>{project.description}</p>
        </>
        )
        })
        }
      </p>
     
    </div>
  );
}

export default Projects;
