import React from "react";
import CategoryList from "./CategoryList";
import "./LinksComponent.css"
const LinksComponent = ({ categoryItems, categoryTitles }) => {
    return (
        
        <div className="categories">
            <div className="category-column">
                <CategoryList
                    categoryItems={categoryItems[0]}
                    categoryTitles={categoryTitles[0]}
                />
            </div>

            <div className="category-column">
                <CategoryList
                    categoryItems={categoryItems[1]}
                    categoryTitles={categoryTitles[1]}
                />

                <div style={{ paddingTop: "10px" }}>
                    <CategoryList
                        categoryItems={categoryItems[2]}
                        categoryTitles={categoryTitles[2]}
                    />
                </div>
            </div>

            <div className="category-column">
                <CategoryList
                    categoryItems={categoryItems[3]}
                    categoryTitles={categoryTitles[3]}
                />
            </div>

            <div className="category-column">
                <CategoryList
                    categoryItems={categoryItems[4]}
                    categoryTitles={categoryTitles[4]}
                />

                <div style={{ paddingTop: "10px" }}>
                    <CategoryList
                        categoryItems={categoryItems[5]}
                        categoryTitles={categoryTitles[5]}
                    />
                </div>
                <div style={{ paddingTop: "10px" }}>
                    <CategoryList
                        categoryItems={categoryItems[6]}
                        categoryTitles={categoryTitles[6]}
                    />
                </div>
                <div style={{ paddingTop: "10px" }}>
                    <CategoryList
                        categoryItems={categoryItems[7]}
                        categoryTitles={categoryTitles[7]}
                    />
                </div>
            </div>
            <div className="category-column">
                <CategoryList
                    categoryItems={categoryItems[8]}
                    categoryTitles={categoryTitles[8]}
                />

                <div style={{ paddingTop: "10px" }}>
                    <CategoryList
                        categoryItems={categoryItems[9]}
                        categoryTitles={categoryTitles[9]}
                    />
                </div>
            </div>
        </div>
    );
};

export default LinksComponent;
