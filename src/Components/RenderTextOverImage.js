import React, { useState, useEffect } from "react";

const RenderTextOverImage = ({
    apiData,
    memeCurrentVal,
    topMemeText,
    bottomMemeText,
}) => {
    return (
        apiData && (
            <img
                src={apiData.data.memes[memeCurrentVal].url}
                alt="meme"
                style={{ width: "33vw", height: "auto", border: "3px solid black" }}
            />
        )
    );
};

export default RenderTextOverImage;
