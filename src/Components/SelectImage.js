import React, { useState, useEffect } from "react";

const SelectImage = ({
  memeCurrentVal,
  setMemeCurrentVal,
  memeMaxVal,
}) => {
  const handleRandomiseClick = () => {
    const randomNumber = Math.floor(Math.random() * memeMaxVal);
    setMemeCurrentVal(randomNumber);
  };

  const previousValue = () => {
    if (memeCurrentVal >= 0) {
      setMemeCurrentVal(memeCurrentVal - 1);
    }
    if (setMemeCurrentVal === 0) {
      document.getElementById("previousButton").disabled = true;
    }
  }

  const nextValue = () => {
    if (memeCurrentVal <= memeMaxVal) {
      setMemeCurrentVal(memeCurrentVal + 1);
    }
    if (memeCurrentVal >= memeMaxVal) {
      document.getElementById("nextButton").disabled = true;
    }
  }

  const handleUserInput = (e) => {
    const userInput = e.target.value;
    if (userInput >= 0 && userInput <= (memeMaxVal - 1)) {
      setMemeCurrentVal(userInput);
    }
    if (e.keyCode === 38) {
      nextValue()
    }
    if (e.keyCode === 40) {
      previousValue()
    }
  };

  return (
    <div>
      <button onClick={handleRandomiseClick}>Randomise Meme Image</button>
      <p>
        <button id="previousButton" onClick={previousValue} disabled={memeCurrentVal === 0}>
          Previous
        </button>
        <input
          type="number"
          value={memeCurrentVal}
          onChange={handleUserInput}
          min={0}
          max={memeMaxVal}
        />
        <button id="nextButton" onClick={nextValue} disabled={memeCurrentVal >= (memeMaxVal - 1)}>
          Next
        </button>
      </p>
    </div>
  );
};
export default SelectImage;
