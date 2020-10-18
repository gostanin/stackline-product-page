import React, { Component } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

import styles from "./Product.module.css";
import * as actions from "../store/actions";
import Chart from "../components/Statistics/Chart/Chart";
import Graph from "../components/Statistics/Graph/Graph";
import ProductCard from "../components/ProductCard/ProductCard";

class Product extends Component {
    componentDidMount() {
        this.props.loadData();
    }

    render() {
        return (
            <div className={styles.Product}>
                <Helmet>
                    <title>{this.props.title}</title>
                </Helmet>
                <ProductCard />
                <div className={styles.statistics}>
                    <Graph data={this.props.sales} label="Retail Sales" />
                    <Chart items={this.props.sales} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { sales: state.sales, title: state.title };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadData: () => dispatch(actions.loadData()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
