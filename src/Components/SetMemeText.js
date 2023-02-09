import React from "react";
import "./RenderTextOverImage.css";

const SetMemeText = ({
  topMemeText,
  setTopMemeText,
  bottomMemeText,
  setBottomMemeText,
}) => {
  const ResetText = () => {
    setTopMemeText("Top Text");
    setBottomMemeText("Bottom Text");
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
            placeholder={topMemeText}
            onChange={(e) => setTopMemeText(e.target.value)}
          />
        </label>
        <br />
        <label>
          Bottom Text:
          <input
            type="text"
            name="bottomText"
            placeholder={bottomMemeText}
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
