import React from "react";
import "./Image.css";

import Information from "./Information";
const Image = ({ image, imagesInfo, infoPos, bgColor, infoLinks }) => {
    let infoStyling = {};
    if (infoPos === "center") {
        infoStyling = { left: "50%" };
    } else if (infoPos === "top") {
        infoStyling = { left: "40%", paddingTop: "4rem" };
    }
    if (bgColor === "black") {
        infoStyling.color = "white";
    }
    return (
        <div
            style={{ alignItems: infoPos, backgroundColor: bgColor }}
            className="image-wrapper"
        >
            <img className="image" src={image} alt="iphone" />

            <div style={infoStyling} className="info">
                <Information imagesInfo={imagesInfo} infoLinks={infoLinks} />
            </div>
        </div>
    );
};

export default Image;
