import "./App.css";
import React, { useState, useEffect } from "react";
import AccessAPI from "./Components/AccessAPI";
import GetMemeText from "./Components/GetMemeText";
import GetRandomImage from "./Components/GetRandomImage";

function App() {
  const [data, setData] = useState(null);
  return (
    <div className="App">
      <h3><a href="https://platform.wbscodingschool.com/courses/full-stack-web-app/12948/">Trygve's React Meme Generator</a></h3>
      <GetRandomImage data={data} /> <br />
      <AccessAPI data={data} setData={setData} />
      <GetMemeText />
    </div>
  );
}

export default App;
