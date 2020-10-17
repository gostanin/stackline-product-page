import React from "react";

import styles from "./Tags.module.css";

const tags = (props) => {
    const tags = props.tags.map((tag) => {
        return <p>{tag}</p>;
    });
    return <div className={styles.Tags}>{tags}</div>;
};

export default tags;
