import React from "react";

const CategoryList = ({ categoryItems, categoryTitles }) => {
    let listItems = categoryItems.map((item) => {
        return (
            <li class="list-item">
                <a id="item-link" href="/">
                    {item}
                </a>
            </li>
        );
    });
    return (
        <div class="category-wrapper">
            <h3 id="title">{categoryTitles}</h3>
            <ul id="list" style={{ listStyle: "none" }}>
                {listItems}
            </ul>
        </div>
    );
};

export default CategoryList;
