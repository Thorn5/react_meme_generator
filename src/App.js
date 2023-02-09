import "./App.css";
import React, { useState, useEffect } from "react";
import SelectImage from "./Components/SelectImage";
import AccessAPI from "./Components/AccessAPI";
import SetMemeText from "./Components/SetMemeText";
import RenderTextOverImage from "./Components/RenderTextOverImage";

function App() {
  const [data, setData] = useState(null);
  const [memeCurrentVal, setMemeCurrentVal] = useState(0)
  const [memeMaxVal, setMemeMaxVal] = useState(null)
  const [topMemeText, setTopMemeText] = useState("Top Text")
  const [bottomMemeText, setBottomMemeText] = useState("Bottom Text")

  return (
    <div className="App">
      <h3><a href="https://platform.wbscodingschool.com/courses/full-stack-web-app/12948/">Trygve's React Meme Generator</a></h3>
      <SelectImage data={data} memeCurrentVal={memeCurrentVal} setMemeCurrentVal={setMemeCurrentVal} memeMaxVal={memeMaxVal} /> <br />
      <AccessAPI data={data} setData={setData} memeCurrentVal={memeCurrentVal} setMemeMaxVal={setMemeMaxVal} />
      <SetMemeText topMemeText={topMemeText} setTopMemeText={setTopMemeText} bottomMemeText={bottomMemeText} setBottomMemeText={setBottomMemeText} />
      <RenderTextOverImage topMemeText={topMemeText} bottomMemeText={bottomMemeText} />
    </div>
  );
}

export default App;


