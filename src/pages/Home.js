import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const hobbies = [
  "playing the piano",
  "pretending to be busy",
  "walking through cities",
  "writing new songs",
  "bar hopping through neighbourhoods",
  "playing league of legends",
  "crafting a new spotify playlist",
  "singing karaoke",
  "still breaking code lol",
];

const space = [
  "corner",
  "fragment",
  "sliver",
  "pocket",
  "section",
  "node",
  "slice",
  "shard",
  "bit",
  "piece",
  "string",
];

function useWordCycle(words) {
  const [currentWord, setCurrentWord] = useState(
    words[Math.floor(Math.random() * words.length)]
  );

  const handleClick = () => {
    const currentIndex = words.indexOf(currentWord);
    const nextIndex = (currentIndex + 1) % words.length;
    setCurrentWord(words[nextIndex]);
  };

  return [currentWord, handleClick];
}

function Home() {
  useEffect(() => {
    document.title = "marcel's home";
  }, []);

  const [currentHobby, handleHobbyClick] = useWordCycle(hobbies);
  const [currentSpace, handleSpaceClick] = useWordCycle(space);

  return (
    <div>
      <h2>hi! i'm marcel!</h2>
      <p>
        welcome to my little{" "}
        <a class="clickable" id="corner" onClick={handleSpaceClick}>
          {currentSpace}
        </a>{" "}
        of the internet!
      </p>
      <p>
        i'm a student based in Toronto &#127809; where i study mechanical
        engineering. when i'm not designing cars, i'm breaking code, watching sports, and{" "}
        <a class="clickable" id="hobbies" onClick={handleHobbyClick}>
          {currentHobby}
        </a>
        .
      </p>
      <p>
        reach out to me anytime at{" "}
        <a href="mailto:m6lui@uwaterloo.sca" class="clickable">
          m6lui@uwaterloo.ca
        </a>
        ,
        <br />
        or ask{" "}
        <NavLink to="/marcelAI" class="clickable">
          <u>my ai</u>
        </NavLink>{" "}
        a question!
      </p>
      <div class="box">
        i'm looking for 2025 winter coop swe or mech eng positions! shoot me an{" "}
        <a href="mailto:m6lui@uwaterloo.ca" class="clickable">
          email
        </a>{" "}
        if you (or your friends) are hiring {" "}
      </div>
    </div>
  );
}

export default Home;
