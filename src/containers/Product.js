import React, { Component } from "react";
import { connect } from "react-redux";

import styles from "./Product.module.css";
import * as actions from "../store/actions";
import Chart from "../components/Statistics/Chart/Chart";
import ProductCard from "../components/ProductCard/ProductCard";

class Product extends Component {
    componentDidMount() {
        this.props.loadData();
    }

    render() {
        console.log(this.props);
        return (
            <div className={styles.Product}>
                <ProductCard />
                <Chart items={this.props.sales}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { sales: state.sales };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadData: () => dispatch(actions.loadData()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
