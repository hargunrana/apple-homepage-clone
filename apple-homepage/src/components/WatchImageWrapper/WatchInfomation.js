import React from "react";
import "./WatchInformation.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";

const WatchInformation = ({ watchImageInfo, typeColor, watchLinks }) => {
    return (
        <div className="text-wrapper">
            <h2 id="title-info">
                {<FontAwesomeIcon icon={faApple} />} {watchImageInfo[0]}
            </h2>
            <p id="type" style={{ color: typeColor }}>
                {watchImageInfo[1]}
            </p>
            <h3 id="about">{watchImageInfo[2]}</h3>
            <div id="links">
                <a href={watchLinks[0]}>Learn more {">"}</a>
                <a id="right-link" href={watchLinks[1]}>
                    {watchImageInfo[3]} {">"}
                </a>
            </div>
        </div>
    );
};

export default WatchInformation;
