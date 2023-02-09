import "./App.css";
import React, { useState, useEffect } from "react";
import AccessAPI from "./Components/AccessAPI";
import GetMemeText from "./Components/GetMemeText";
import SelectImage from "./Components/GetRandomImage";

function App() {
  const [data, setData] = useState(null);
  const [memeCurrentVal, setMemeCurrentVal] = useState(0)
  const [memeMaxVal, setMemeMaxVal] = useState(null)

  return (
    <div className="App">
      <h3><a href="https://platform.wbscodingschool.com/courses/full-stack-web-app/12948/">Trygve's React Meme Generator</a></h3>
      <SelectImage data={data} memeCurrentVal={memeCurrentVal} setMemeCurrentVal={setMemeCurrentVal} memeMaxVal={memeMaxVal} /> <br />
      <AccessAPI data={data} setData={setData} memeCurrentVal={memeCurrentVal} setMemeMaxVal={setMemeMaxVal} />
      <GetMemeText />
    </div>
  );
}

export default App;


