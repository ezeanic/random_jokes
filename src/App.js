import './App.css';
import React, {useState} from 'react';

function App() {
  const [joke, setJoke] = useState();
  const [punchLine, setPunchLine] = useState('');

  const getJoke = async ()=>{
    const response = await fetch(`https://official-joke-api.appspot.com/random_joke`);
    const json = await response.json();
    console.log(json);
    setJoke(json.setup);
    setPunchLine(json.punchline);
    document.getElementById("pline").style.visibility = "hidden";
  }

  return (
    <div> 
      <h1>Random Jokes</h1>
      <button class="button" onClick={getJoke}><span>Get Joke</span></button>
      <p>{joke}</p>
      <button class="button" onClick={()=>{document.getElementById("pline").style.visibility = "visible"}}><span>Answer</span></button>
      <p id="pline" style={{visibility: "hidden"}}>{punchLine}</p>
    </div>
  );
}

export default App;
