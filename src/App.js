import "./App.css";
import AccessAPI from "./Components/AccessAPI";
import GetMemeText from "./Components/GetMemeText";

function App() {
  return (
    <div className="App">
      <h3>Add-Meme-Pics Branch</h3>
      <AccessAPI />
      <GetMemeText />
    </div>
  );
}

export default App;
