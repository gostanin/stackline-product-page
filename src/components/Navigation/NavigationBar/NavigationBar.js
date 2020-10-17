import React from "react";

import styles from "./NavigationBar.module.css";
import Logo from "../../Logo/Logo";

const navigationBar = (props) => {
    return (
        <header className={styles.NavigationBar}>
            <Logo /><p>Stackline</p>
        </header>
    );
};

export default navigationBar;
