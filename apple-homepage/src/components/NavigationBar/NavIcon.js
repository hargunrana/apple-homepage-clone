import React from "react";

const NavIcon = ({ link, text }) => {
    return (
        <div>
            <a className="nav-link" href={link}>
                {text}
            </a>
        </div>
    );
};

export default NavIcon;
