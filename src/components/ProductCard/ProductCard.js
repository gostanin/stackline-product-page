import React from "react";

import styles from "./ProductCard.module.css";
import Tags from "./Tags/Tags";
import ProductInformation from "./ProductInformation/ProductInformation";
import NavigationMenu from "../Navigation/NavigationMenu/NavigationMenu";

const productCard = (props) => {
    return (
        <div className={styles.ProductCard}>
            <ProductInformation />
            <Tags />
            <NavigationMenu />
        </div>
    );
};

export default productCard;
