import React, { useMemo } from "react";
import { Chart } from "react-charts";

import styles from "./Graph.module.css";

const Graph = (props) => {
    const data = useMemo(
        () => [
            {
                label: props.label,

                data: props.data.map((sale) => {
                    return {
                        primary: new Date(sale.weekEnding),
                        secondary: sale.retailSales,
                    };
                }),
            },
        ],

        [props.data, props.label]
    );

    const series = useMemo(
        () => ({
            showPoints: false,
        }),
        []
    );

    const axes = useMemo(
        () => [
            { primary: true, type: "time", position: "bottom" },

            { type: "linear", position: "left", show: false },
        ],

        []
    );

    return (
        <div className={styles.pad}>
            <p>Retail Sales</p>
            <div className={styles.Graph}>
                <Chart data={data} axes={axes} series={series} tooltip />
            </div>
        </div>
    );
};

export default Graph;
