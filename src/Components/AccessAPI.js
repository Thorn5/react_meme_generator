import React, { useState, useEffect } from "react";

const AccessAPI = () => {
  

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("https://api.imgflip.com/get_memes");
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          // console.log(data.data.memes[0]);
          setData(data);
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
        src={data.data.memes[0].url}
        alt="meme"
        style={{ width: "25vw", height: "auto", border: "3px solid black" }}
      />
    )
  );
};

export default AccessAPI;
