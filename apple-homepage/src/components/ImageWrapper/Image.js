import React from "react";
import "./Image.css";

import Information from "./Information";
const Image = ({ image, imagesInfo, infoPos }) => {
    let infoStyling = {};
    if (infoPos === "center") {
        infoStyling = { left: "50%" };
    } else if (infoPos === "top") {
        infoStyling = { left: "40%", paddingTop: "5rem", color: "white" };
    }

    return (
        <div style={{ alignItems: infoPos }} class="image-wrapper">
            <img class="image" src={image} />

            <div style={infoStyling} class="info">
                <Information imagesInfo={imagesInfo} />
            </div>
        </div>
    );
};

export default Image;
