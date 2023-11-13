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
          developed a couple of accessibility tools for google (
          <a
            href="https://workspace.google.com/intl/en_ca/"
            class="clickable"
            target="_blank"
          >
            google workspace
          </a>
          )
        </li>
        <li>
          worked on purolator's b2c shipping application as a pm (
          <a
            href="https://www.purolator.com/en/business-solutions/technology-solutions/track-manage-deliveries-receivers"
            class="clickable"
            target="_blank"
          >
            PYW
          </a>
          )
        </li>
        <li>
          wrote some nasa code for the canadian space agency (
          <a
            href="https://github.com/nasa/cFS"
            class="clickable"
            target="_blank"
          >
            cFS
          </a>
          )
        </li>
        <li>
          wrote test suites for Equitable Bank's android app (
          <a
            href="https://apps.apple.com/ca/app/eq-bank-mobile-banking/id1039432211"
            class="clickable"
            target="_blank"
          >
            EQ Bank Mobile Banking
          </a>
          )
        </li>
      </ul>
      <p></p>
      <p>and did some clubs:</p>
      <ul>
        <li>
          wrote some satellite code for{" "}
          <a
            href="https://mcmasterneudose.ca/"
            target="_blank"
            class="clickable"
          >
            McMaster NEUDOSE
          </a>
        </li>
        <li>
          led the marketing team for the biggest design competition in 2021 with
          the{" "}
          <a
            href="https://www.mcmasterdesignleague.com/"
            class="clickable"
            target="_blank"
          >
            McMaster Design League
          </a>
        </li>
        <li>
          curated the attendee experience for{" "}
          <a href="https://deltahacks.com/" target="_blank" class="clickable">
            Deltahacks
          </a>
        </li>
      </ul>
     
    </div>
  );
}

export default About;
