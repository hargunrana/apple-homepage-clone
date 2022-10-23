import React from "react";

import "./Footer.css";
import LinksComponent from "./LinksComponent";

let categoryTitles = [
    "Shop and Learn",
    "Services",
    "Account",
    "Apple Store",
    "For Business",
    "For Education",
    "For Healthcare",
    "For Government",
    "Apple Values",
    "About Apple",
];

let categoryItems = [
    [
        "Store",
        "Mac",
        "iPad",
        "iPhone",
        "Watch",
        "AirPods",
        "TV & Home",
        "AirTag",
        "Accessories",
        "Gift Cards",
    ],
    [
        "Apple Music",
        "Apple TV+",
        "Apple Fitness+",
        "Apple News+",
        "Apple Arcade",
        "iCloud",
        "Apple One",
        "Apple Card",
        "Apple Books",
        "Apple Podcasts",
        "App Store",
    ],
    ["Manage Your Apple ID", "Apple Store Account", "iCloud.com"],
    [
        "Find a Store",
        "Genius Bar",
        "Today at Apple",
        "Apple Camp",
        "Apple Store App",
        "Refurbished and Clearance",
        "Financing",
        "Apple Trade In",
        "Order Status",
        "Shopping Help",
    ],
    ["Apple and Business", "Shop and Business"],
    ["Apple and Education", "Shop for K-12", "Shop for College"],
    [
        "Apple in Healthcare",
        "Health on Apple Watch",
        "Health Records on iPhone",
    ],
    ["Shop for Government", "Shop for Veterans and Military"],

    [
        "Accessibility",
        "Education",
        "Environment",
        "Inclusion and Diversity",
        "Privacy",
        "Racial Equity and Justice",
        "Supplier Responsibility",
    ],
    [
        "Newsroom",
        "Apple Leadership",
        "Career Opportunities",
        "Investors",
        "Ethics & Compliance",
        "Events",
        "Contact Apple",
    ],
];

const Footer = () => {
    return (
        <div class="footer-wrapper">
            {/* <p style={{ paddingLeft: "15vw" }} class="text">
                To access and use all the features of Apple Card, you must add
                Apple Card to Wallet on an iPhone or iPad with the latest
                version of iOS or iPadOS. Update to the latest version by going
                to Settings {">"} General {">"}Software Update. Tap Download and
                Install.
                <br /> Available for qualifying applicants in the United States.
                <br /> Apple Card is issued by Goldman Sachs Bank USA, Salt Lake
                City Branch.
                <br /> Learn more about how Apple Card applications are
                evaluated at support.apple.com/kb/HT209218.
            </p> */}

            <LinksComponent
                categoryItems={categoryItems}
                categoryTitles={categoryTitles}
            />
        </div>
    );
};

export default Footer;
