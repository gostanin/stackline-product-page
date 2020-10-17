import React from "react";

import styles from "./NavigationMenu.module.css";
import homeImg from "../../../assets/home.png";
import graphImg from "../../../assets/bar-graph-color.png";
import MenuItem from "./MenuItem/MenuItem";

const navigationMenu = (props) => {
    return (
        <div className={styles.NavigationMenu}>
            <ul>
                <li>
                    <MenuItem img={homeImg} text="OVERVIEW" />
                </li>
                <li>
                    <MenuItem img={graphImg} text="SALES" active />
                </li>
            </ul>
        </div>
    );
};

export default navigationMenu;
