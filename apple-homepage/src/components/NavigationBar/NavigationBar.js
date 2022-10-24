import React from "react";
import "./NavigationBar.css";
import NavListItem from "./NavListItem";
import NavIcon from "./NavIcon";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavigationBar = () => {
    return (
        <div className="nav-bar">
            <div id="menu">
                <NavIcon link={"/"} text={<FontAwesomeIcon icon={faBars} />} />
            </div>
            <div className="apple-logo">
                <NavIcon link={"/"} text={<FontAwesomeIcon icon={faApple} />} />
            </div>
            <ul id="nav-list">
                <NavListItem
                    text="Store"
                    link="https://www.apple.com/us/shop/goto/store"
                />

                <NavListItem text="Mac" link="https://www.apple.com/mac/" />

                <NavListItem text="iPad" link="https://www.apple.com/ipad/" />

                <NavListItem
                    text="iPhone"
                    link="https://www.apple.com/iphone/"
                />

                <NavListItem text="Watch" link="https://www.apple.com/watch/" />

                <NavListItem
                    text="AirPods"
                    link="https://www.apple.com/airpods/"
                />

                <NavListItem
                    text="TV & Home"
                    link="https://www.apple.com/tv-home/"
                />

                <NavListItem
                    text="Only on Apple"
                    link="https://www.apple.com/services"
                />

                <NavListItem
                    text="Accessories"
                    link="https://www.apple.com/shop/accessories/all"
                />

                <NavListItem text="Support" link="https://support.apple.com/" />
            </ul>

            <div id="search-button">
                <NavIcon
                    link={"/"}
                    text={<FontAwesomeIcon icon={faMagnifyingGlass} />}
                />
            </div>

            <div id="bag-button">
                <NavIcon
                    link={"/"}
                    text={<FontAwesomeIcon icon={faBagShopping} />}
                />
            </div>
        </div>
    );
};

export default NavigationBar;
