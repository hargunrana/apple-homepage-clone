import React from "react";
import "./WatchInformation.css";
const WatchInformation = ({ watchImageInfo, typeColor }) => {
    return (
        <div class="text-wrapper">
            <h2 id="title">{watchImageInfo[0]}</h2>
            <p id="type" style={{ color: typeColor }}>
                {watchImageInfo[1]}
            </p>
            <h3 id="about">{watchImageInfo[2]}</h3>
            <div id="links">
                <a href="/">Learn more {">"}</a>
                <a id="right-link" href="/">
                    {watchImageInfo[3]} {">"}
                </a>
            </div>
        </div>
    );
};

export default WatchInformation;
