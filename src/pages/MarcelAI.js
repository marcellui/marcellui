import { useState, useEffect } from "react";
import OpenAI from 'openai';
const { Configuration, OpenAIApi } = require("openai");

const MAX_CLICKS = 5;
const endings = ["", "!", " :)", "!!", " xd", " :))"];
const goodbies = [
 
];
function MarcelAI() {
  const [input, setInput] = useState("");
  const [copyInput, setCopyInput] = useState("");
  const [result, setResult] = useState();
  const [count, setCount] = useState(0);
  const [clicks, setClicks] = useState(
    parseInt(localStorage.getItem("clicks")) || 0
  );
  const [placeholder, setPlaceholder] = useState(
    "what do you want to ask marcel ai?"
  );
  

  const {OpenAI} = require('openai')
  const OpenAIApi = require('openai');

  const openai = new OpenAIApi.OpenAI({
     apiKey: process.env.REACT_APP_OPENAI_API_KEY, dangerouslyAllowBrowser: true
    });
  
  
  useEffect(() => {
    document.title = "marcel's ai";
  }, []);

  function textInput(e) {
    setCount(e.target.value.length);
    setInput(e.target.value);
  }

  async function onSubmit(event) {
    setCopyInput(input);
    console.log(input);
    event.preventDefault();
    try {
      const lastClick = localStorage.getItem("lastClick");
      const currentTime = Date.now();
      const HALF_DAY_IN_MS = 12 * 60 * 60 * 1000;
      if (lastClick && currentTime - lastClick < HALF_DAY_IN_MS) {
        setInput("no more questions for today!");
        setResult(goodbies[Math.floor(Math.random() * goodbies.length)]);
        return;
      }
      if (clicks >= MAX_CLICKS) {
        setCopyInput("no more questions for today!");
        setResult(goodbies[Math.floor(Math.random() * goodbies.length)]);
        setPlaceholder("no more questions for today!");
        return;
      } 
      
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: 'user', content: input }],
        temperature: 0,
        max_tokens: 50,
        top_p: 1,
        frequency_penalty: 0.23,
        presence_penalty: 0,
        stop: ["[CEND]"],
        
      });

      const data = response.choices[0].message.content;
      console.log(data);
     
      setResult(
        data.concat(endings[Math.floor(Math.random() * endings.length)])
      );
      setInput("");
      setClicks(clicks + 1);
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  }

  const onEnterPress = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      onSubmit(e);
    }
  };

  return (
    <div>
      <h1>ask marcel ai a question!</h1>
      <form onSubmit={onSubmit}>
        <textarea
          type="text"
          name="prompt"
          placeholder={placeholder}
          value={input}
          onChange={(e) => textInput(e)}
          maxLength="100"
          onKeyDown={(e) => onEnterPress(e)}
        />
        <div class="flex-box" id="form">
          <input
            type="submit"
            value={`ask! (${
              MAX_CLICKS - clicks > 0 ? MAX_CLICKS - clicks : 0
            }/${MAX_CLICKS})`}
            // disabled={clicks >= 5}
          />
          <p class="count"> {100 - count}/100</p>
        </div>
      </form>
      <p class="disclaimer">
        <i>
          *note that responses are generated by an ai model, and may not be
          accurate. for best responses, use proper grammar (capitalization and
          punctuation), and end prompts with a "?"
          <br />
        </i>
      </p>
      <hr class="dashed" />
      <p>question: {copyInput}</p>
      <p>marcel ai answer: {result}</p>
    </div>
  );
}


export default MarcelAI;
