import React from "react";

const NavListItem = ({ text, link }) => {
    return (
        <li>
            <a href={link}>{text}</a>
        </li>
    );
};

export default NavListItem;
