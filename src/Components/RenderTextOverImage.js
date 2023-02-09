import React, { useState, useEffect } from "react";
import styles from "./RenderTextOverImage.css";

const RenderTextOverImage = ({
    apiData,
    memeCurrentVal,
    topMemeText,
    bottomMemeText,
}) => {
    return (
        apiData && (
            <div className="imgContainer">
                <img
                    className="img"
                    src={apiData.data.memes[memeCurrentVal].url}
                    alt="Meme Image"
                />
                <div className="topMemeText">{topMemeText}</div>
                <div className="bottomMemeText">{bottomMemeText}</div>
            </div>
        )
    );
};

export default RenderTextOverImage;
