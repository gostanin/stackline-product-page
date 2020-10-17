import React from "react";

import styles from "./Chart.module.css";

const chart = (props) => {
    const header = props.items.slice(0, 1).map((item, indexItem) => {
        return (
            <tr key={indexItem}>
                {Object.entries(item).map(([key, _], indexField) => {
                    return (
                        <th key={indexItem + indexField}>
                            {key
                                .split(/(?=[A-Z])/)
                                .map((word) => word.toUpperCase())
                                .join(" ")}
                        </th>
                    );
                })}
            </tr>
        );
    });
    const items = props.items.map((item, indexItem) => {
        return (
            <tr key={indexItem}>
                {Object.entries(item).map(([_, value], indexField) => {
                    return <td key={indexItem + indexField}>{value}</td>;
                })}
            </tr>
        );
    });
    return (
        <div className={styles.Chart}>
            <table>
                <thead>
                    {header}
                </thead>
                <tbody>{items}</tbody>
            </table>
        </div>
    );
};

export default chart;
