import { useEffect } from "react";
import { NavLink } from "react-router-dom";

function About() {
  useEffect(() => {
    document.title = "marcel's life";
  }, []);

  return (
    <div>
      <img src="/images/me.png" alt="it's me!" width="200" height="auto" />
  
      <hr class="dashed" />
      <p>
        hello! i'm someone who's a bit all over the place. i game, i cook, and i'm a proud father to my cat anubis. i love all things tech and sustainability. 
        I still haven't really figured out my path, but I continue to try new things to learn and grow!
        <br />
    
      </p>
      <p> </p>
      <p>
        <b>currently</b>
      </p>
      <p>
        i'm a 3A mechanical engineering student at the {" "}
        <a href="https://www.uwaterloo.ca" target="_blank" class="clickable">
          university of waterloo
        </a>
        . when i'm not attending class, i'm learning how to code or designing things in CAD.
        <br />
    
       
      </p>
      <p> </p>
      <p>
        <b>previously</b>
      </p>
      <p>did some internships:</p>
      <ul>
        <li>
            designed and built elevators @ (<a href="https://www.delta-elevator.com/"
            class="clickable"
            target="_blank">
            
                Delta Elevator</a>)
        </li>
        <li>
            designed medical devices used for surgery @ (<a href="https://uwaterloo.ca/smart-materials-advanced-robotic-technologies/"
            class="clickable"
            target="_blank">
            
                SMART Lab</a>)
        </li>
        <li>
            designed stairwells, benches, bikeracks, and metal fixtures @ (<a href="https://www.pricagroupcm.com/"
            class="clickable"
            target="_blank">
            
                Prica Construction Group</a>)
        </li>
      </ul>
      <p>did a bootcamp:</p>

      <p></p>
      <ul>
        <li>
        <p>Software Engineering @ <a href="https://www.brainstation.io/"
            class="clickable"
            target="_blank"> 
            BrainStation  
            </a>
            </p>
        </li>
      </ul>
      <p>did some clubs:</p>
    <ul>
     <li> <p>designed car panels and suspension components @ <a href="https://www.uwmidsun.com/"
            class="clickable"
            target="_blank"> 
            Midnight Sun
            </a>
            </p>
     </li>
    </ul>
      
    </div>
  );
}

export default About;
