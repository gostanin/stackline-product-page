import React from "react";

import styles from "./Product.module.css";
import Chart from "../components/Statistics/Chart/Chart";
import ProductCard from "../components/ProductCard/ProductCard";

const product = (props) => {
    return (
        <div className={styles.Product}>
            <ProductCard />
            <Chart />
        </div>
    );
};

export default product;
