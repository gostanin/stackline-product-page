import React from "react";

import styles from "./MenuItem.module.css";

const menuItem = (props) => {
    const allStyles = props.active
        ? styles.active.concat(" ", styles.MenuItem)
        : styles.MenuItem;
    return (
        <button className={allStyles}>
            <img src={props.img} alt={props.text} />
            <span>{props.text}</span>
        </button>
    );
};

export default menuItem;
