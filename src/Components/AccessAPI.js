import React, { useEffect } from "react";

const AccessAPI = ({ data, setData, memeCurrentVal, setMemeMaxVal }) => {
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("https://api.imgflip.com/get_memes");
        if (response.ok) {
          const data = await response.json();
          setData(data);
          setMemeMaxVal(data.data.memes.length)
        } else {
          console.log(`Error: ${response.status}`);
        }
      } catch (error) {
        console.log(`Error: ${error}`);
      }
    };

    getData();
  }, []);

  return (
    data && (
      <img
        src={data.data.memes[memeCurrentVal].url}
        alt="meme"
        style={{ width: "25vw", height: "auto", border: "3px solid black" }}
      />
    )
  );
};

export default AccessAPI;

