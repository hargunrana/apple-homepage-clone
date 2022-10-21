import React from "react";

const NavListItem = ({ text, link }) => {
    return (
        <li>
            <a class="nav-link" href={link}>{text}</a>
        </li>
    );
};

export default NavListItem;
