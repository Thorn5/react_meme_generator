import React, { useState, useEffect } from "react";

const AccessAPI = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("https://api.imgflip.com/get_memes");
        if (response.ok) {
          const data = await response.json();
          console.log(data);
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

  return data;
};

export default AccessAPI;
