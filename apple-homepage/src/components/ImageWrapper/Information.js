import React from "react";
import "./Information.css";
const Information = ({ imagesInfo }) => {
    return (
        <div class="text-wrapper">
            <h2>{imagesInfo[0]}</h2>
            <h3>{imagesInfo[1]}</h3>
            <p>{imagesInfo[2]}</p>
            <div class="info-links">
                <a href="/">Learn more {">"}</a>
                <a id="right-link" href="/">
                    {imagesInfo[3]} {">"}
                </a>
            </div>
        </div>
    );
};

export default Information;
