import React from "react";

import styles from "./Tags.module.css";

const tags = (props) => {
    return (
        <div className={styles.Tags}>
            <p>Pantry</p>
            <p>Obselete</p>
            <p>Blender</p>
            <p>Lighting Deal</p>
        </div>
    );
};

export default tags;