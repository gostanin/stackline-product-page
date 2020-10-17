import React from "react";

import styles from "./NavigationBar.module.css";
import Logo from "../../Logo/Logo";

const navigationBar = (props) => {
    return (
        <header className={styles.NavigationBar}>
            <div>
                <Logo />
            </div>
        </header>
    );
};

export default navigationBar;
