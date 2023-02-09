import React from "react";

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
                <div className="topMemeText"><span>{topMemeText}</span></div>
                <div className="bottomMemeText"><span>{bottomMemeText}</span></div>
            </div>
        )
    );
};

export default RenderTextOverImage;
