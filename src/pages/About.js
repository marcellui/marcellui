import { useEffect } from "react";
import { NavLink } from "react-router-dom";

function About() {
  useEffect(() => {
    document.title = "marcels's life";
  }, []);

  return (
    <div>
      <img src="/images/me.png" alt="it's me!" width="200" height="auto" />
  
      <hr class="dashed" />
      <p>
        hello! i'm someone who's a bit all over the place. 
       I still haven't really figured out what I will be, but I continue to soak in my surroundings everyday to learn and grow!
        <br />
        <br />
        i'm a serial hobby hopper, i dabble in the arts, i stay fit, and i'm
        currently on the quest for a perfect cup of coffee. my existence in so
        many things really helped shape the learner that i am today, and the one
        i'll be tomorrow!
      </p>
      <p> </p>
      <p>
        <b>currently</b>
      </p>
      <p>
        i'm a 3A mechanical engineering student at the {" "}
        <a href="https://www.uwaterloo.ca" target="_blank" class="clickable">
          University of Waterloo
        </a>
        . When i'm not attending class, i'm building solar cars and learning how to design things.
        <br />
        <br />
        i'm interested in accessibility, and all creative intersections of tech
        and art &#127912;.
        <br />
        <br />
      </p>
      <p> </p>
      <p>
        <b>previously</b>
      </p>
      <p>did some internships:</p>
      <ul>
        <li>
         
        </li>
        <li>
         
    
        </li>
        <li>
         
        </li>
        <li>
          
        </li>
      </ul>
      <p></p>
      <p></p>
      <ul>
        <li>
          
        </li>
        <li>
          
        </li>
        
        
      </ul>
     
    </div>
  );
}

export default About;
