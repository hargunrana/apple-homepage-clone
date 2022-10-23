import React from "react";

const NavListItem = ({ text, link }) => {
    return (
        <li id="nav-list-item">
            <a class="nav-link" href={link}>
                {text}
            </a>
        </li>
    );
};

export default NavListItem;
