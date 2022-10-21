import React from "react";

const NavIcon = ({ link, text }) => {
    return (
        <div
            style={{
                
                padding: "0.75rem",
                // margin: "0",
                paddingLeft:"2.5rem"
            }}
        >
            <a href={link}>{text}</a>
        </div>
    );
};

export default NavIcon;
