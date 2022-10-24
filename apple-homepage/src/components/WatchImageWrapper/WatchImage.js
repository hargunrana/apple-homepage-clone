/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./WatchImage.css";

import WatchInformation from "./WatchInfomation";
const WebImage = ({
    image,
    watchImageInfo,
    infoPos,
    bgColor,
    typeColor,
    watchLinks,
}) => {
    let infoStyling = {};
    if (bgColor === "white") {
        infoStyling = { backgroundColor: "rgba(251, 251, 251, 255)" };
    } else if (bgColor === "black") {
        infoStyling = { backgroundColor: "black", color: "white" };
    }
    return (
        <div style={infoStyling} className="watch-image-wrapper">
            <img src={image}></img>

            <div className="watch-info">
                <WatchInformation
                    watchImageInfo={watchImageInfo}
                    typeColor={typeColor}
                    watchLinks={watchLinks}
                />
            </div>
        </div>
    );
};

export default WebImage;
