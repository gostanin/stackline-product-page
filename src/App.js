import React, { Component } from "react";

import Layout from "./hoc/Layout/Layout";
import Product from "./containers/Product";

class App extends Component {
    render() {
        return (
            <Layout>
                <Product />
            </Layout>
        );
    }
}
export default App;
