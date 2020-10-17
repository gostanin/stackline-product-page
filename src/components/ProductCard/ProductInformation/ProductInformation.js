import React from "react";

import styles from "./ProductInformation.module.css";
import itemImg from "../../../assets/item.png";

const productInformation = (props) => {
    return (
        <div className={styles.ProductInformation}>
            <img src={itemImg} alt="Product" />
            <p>Shark Ninja</p>
            <span>
                Magic Bullet NutriBullet 12-Piece High-Speed Blender/Mixer
                System
            </span>
        </div>
    );
};

export default productInformation;
