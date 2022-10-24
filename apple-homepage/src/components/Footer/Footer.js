import React from "react";

import "./Footer.css";
import LinksComponent from "./LinksComponent";
import { categoryTitles, categoryItems } from "../../Data";
import Divider from "../Divider";

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="upper">
                <p className="text">
                    To access and use all the features of Apple Card, you must
                    add Apple Card to Wallet on an iPhone or iPad with the
                    latest version of iOS or iPadOS. Update to the latest
                    version by <br></br> going to Settings {">"} General {">"}
                    Software Update. Tap Download and Install.
                    <br /> Available for qualifying applicants in the United
                    States.
                    <br /> Apple Card is issued by Goldman Sachs Bank USA, Salt
                    Lake City Branch.
                    <br /> Learn more about how Apple Card applications are
                    evaluated at{" "}
                    <a id="foot-link" href="support.apple.com/kb/HT209218">
                        support.apple.com/kb/HT209218.
                    </a>
                    <br />
                </p>
            </div>
            <Divider />

            <LinksComponent
                categoryItems={categoryItems}
                categoryTitles={categoryTitles}
            />

            <div className="middle">
                <p className="text">
                    {" "}
                    More ways to shop: Find an Apple Store or other retailer
                    near you. Or call{" "}
                    <a id="foot-link" href="support.apple.com/kb/HT209218">
                        1-800-MY-APPLE.
                    </a>
                </p>
            </div>
            <Divider />
        </div>
    );
};

export default Footer;
