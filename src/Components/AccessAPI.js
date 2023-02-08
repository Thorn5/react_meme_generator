const AccessAPI  = async () => {
    try {
      const response = await fetch(https://api.imgflip.com/get_memes);
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
  
  export default AccessAPI;
