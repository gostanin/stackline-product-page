import React from "react";

import styles from "./Chart.module.css";

const chart = (props) => {
    const items = (
        <tr>
            <td>01-09-16</td>
            <td>$348.123</td>
            <td>$348.123</td>
            <td>887</td>
            <td>$348.123</td>
        </tr>
    );
    return (
        <table className={styles.Chart}>
            <tr>
                <th>WEEK ENDING</th>
                <th>RETAIL SALES</th>
                <th>WHOLESALE SALES</th>
                <th>UNIT SOLD</th>
                <th>RETAILER MARGIN</th>
            </tr>
            {items}
        </table>
    );
};

export default chart;