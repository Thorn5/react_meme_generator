import { useEffect } from "react";

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

};

export default AccessAPI;

