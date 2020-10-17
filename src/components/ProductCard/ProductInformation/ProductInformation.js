import React from "react";

import styles from "./ProductInformation.module.css";
// import itemImg from "../../../assets/item.png";

const productInformation = (props) => {
    return (
        <div className={styles.ProductInformation}>
            <img src={props.imgLink} alt="Product" />
            <p>{props.title}</p>
            <span>{props.subtitle}</span>
        </div>
    );
};

export default productInformation;
