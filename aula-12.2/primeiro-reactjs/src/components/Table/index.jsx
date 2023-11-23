import React from "react";
import "./index.css"

const Table = ({title, text}) => {
    return (
        <article>
            <div>
                <h2 className="tableItem">{title}</h2>
                <p className="tableItem">{text}</p>
            </div>
        </article>
    );
};
// className = add class

export default Table;