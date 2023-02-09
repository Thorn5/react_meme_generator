import React, { useEffect } from "react";

const AccessAPI = ({ apiData, setApiData, memeCurrentVal, setMemeMaxVal }) => {
  useEffect(() => {
    const getApiData = async () => {
      try {
        const response = await fetch("https://api.imgflip.com/get_memes");
        if (response.ok) {
          const apiData = await response.json();
          setApiData(apiData);
          setMemeMaxVal(apiData.data.memes.length)
        } else {
          console.log(`Error: ${response.status}`);
        }
      } catch (error) {
        console.log(`Error: ${error}`);
      }
    };

    getApiData();
  }, []);

  // return (
  //   apiData && (
  //     <img
  //       src={apiData.data.memes[memeCurrentVal].url}
  //       alt="meme"
  //       style={{ width: "25vw", height: "auto", border: "3px solid black" }}
  //     />
  //   )
  // );
};

export default AccessAPI;

