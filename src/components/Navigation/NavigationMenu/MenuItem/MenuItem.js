import React from "react";

import styles from "./MenuItem.module.css";

const menuItem = (props) => {
    const allStyles = props.active
        ? styles.MenuItem
        : styles.inactive.concat(" ", styles.MenuItem);
    return (
        <button className={allStyles}>
            <img src={props.img} alt="home" />
            <span>{props.text}</span>
        </button>
    );
};

export default menuItem;
