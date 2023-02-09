import React from "react";
import "./RenderTextOverImage.css";

const SetMemeText = ({
  topMemeText,
  setTopMemeText,
  bottomMemeText,
  setBottomMemeText,
}) => {
  const ResetText = () => {
    setTopMemeText("");
    setBottomMemeText("");
  };

  return (
    <div>
      <b>Please type the desired text:</b>
      <form>
        <label>
          Top Text:
          <input
            type="text"
            name="topText"
            value={topMemeText}
            placeholder="Top Text"
            onChange={(e) => setTopMemeText(e.target.value)}
          />
        </label>
        <br />
        <label>
          Bottom Text:
          <input
            type="text"
            name="bottomText"
            value={bottomMemeText}
            placeholder="Bottom Text"
            onChange={(e) => setBottomMemeText(e.target.value)}
          />
        </label>
        <br />
      </form>
      <button onClick={ResetText}>Reset Text</button>
    </div>
  );
};

export default SetMemeText;
