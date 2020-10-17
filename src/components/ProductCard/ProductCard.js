import React, { Component } from "react";
import { connect } from "react-redux";

import styles from "./ProductCard.module.css";
import Tags from "./Tags/Tags";
import ProductInformation from "./ProductInformation/ProductInformation";
import NavigationMenu from "../Navigation/NavigationMenu/NavigationMenu";

class ProductCard extends Component {
    render() {
        return (
            <div className={styles.ProductCard}>
                <ProductInformation
                    title={this.props.title}
                    subtitle={this.props.subtitle}
                    imgLink={this.props.image}
                />
                <Tags tags={this.props.tags} />
                <NavigationMenu />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tags: state.tags,
        title: state.title,
        subtitle: state.subtitle,
        image: state.image,
    };
};

export default connect(mapStateToProps)(ProductCard);
