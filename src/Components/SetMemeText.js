import React from "react";
import "./RenderTextOverImage.css"

const SetMemeText = ({
  topMemeText,
  setTopMemeText,
  bottomMemeText,
  setBottomMemeText,
}) => {


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
  </div>
);
};

export default SetMemeText;
