import React, { useState, useEffect } from "react";

const GetRandomImage = ({ data }) => {
    // Weird!
    // console.log(data);
    // console.log(data.data.memes.length);

    const handleClick = () => {
        const [arrayLength, setArrayLength] = useState(data.data.memes.length)
        //add code to generate random image
    }

    return (
        <div>
            <button onClick={handleClick}>Randomise Meme Image</button>
        </div>
    )
}

export default GetRandomImage;

