import React from "react";

import styles from "./Product.module.css";
import Chart from "../components/Statistics/Chart/Chart";

const product = (props) => {
    return (
        <div className={styles.Product}>
            <Chart />
        </div>
    );
};

export default product;
