import React, { useState } from 'react';

const [url, setUrl] = useState(https://api.imgflip.com/get_memes)

export default const AccessAPI  = async (url) => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        return data;
      } else {
        console.log(`Error: ${response.status}`);
      }
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };