import React from "react";
import CurrencyFormat from "react-currency-format";

import styles from "./Chart.module.css";
import arrowImg from "../../../assets/angle-arrow-down.png";

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
                            <button><img src={arrowImg} alt="sort" /></button>
                        </th>
                    );
                })}
            </tr>
        );
    });
    const items = props.items.map((item, indexItem) => {
        return (
            <tr key={indexItem}>
                {Object.entries(item).map(([key, value], indexField) => {
                    const itemData =
                        key.includes("sale") || key.includes("retail") ? (
                            <CurrencyFormat
                                value={value}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                            />
                        ) : (
                            value
                        );
                    return <td key={indexItem + indexField}>{itemData}</td>;
                })}
            </tr>
        );
    });
    return (
        <div className={styles.Chart}>
            <table>
                <thead>{header}</thead>
                <tbody>{items}</tbody>
            </table>
        </div>
    );
};

export default chart;
