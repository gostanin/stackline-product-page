import React from "react";

import styles from "./NavigationBar.module.css";
import Logo from "../../components/Logo/Logo";

const navigationBar = (props) => {
    return (
        <header>
            <div className={styles.NavigationBar}>
                <Logo />
            </div>
        </header>
    );
};

export default navigationBar;
