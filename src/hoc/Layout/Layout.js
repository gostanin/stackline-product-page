import React, { Component } from "react";

import styles from "./Layout.module.css";
import NavigationBar from "../../components/Navigation/NavigationBar/NavigationBar";

class Layout extends Component {
    render() {
        return (
            <React.Fragment>
                <NavigationBar />
                <main className={styles.Layout}>{this.props.children}</main>
            </React.Fragment>
        );
    }
}

export default Layout;
