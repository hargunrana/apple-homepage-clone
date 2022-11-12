import React from "react";
import "./Information.css";
const Information = ({ imagesInfo,infoLinks }) => {
    return (
        <div className="text-wrapper">
            <h2>{imagesInfo[0]}</h2>
            <h3>{imagesInfo[1]}</h3>
            <p>{imagesInfo[2]}</p>
            <div className="info-links">
                <a href={infoLinks[0]}>Learn more {">"}</a>
                <a id="right-link" href={infoLinks[1]}>
                    {imagesInfo[3]} {">"}
                </a>
            </div>
        </div>
    );
};

export default Information;
