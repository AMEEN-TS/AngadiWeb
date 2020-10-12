import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import AppBar from "./appbar/AppBar";
import Home from "./home/Home";
import PublicTheme from "./PublicTheme";
import AllCategories from "./category/AllCategories";
import Cart from "./cart/Cart";
import ProductDetails from "./product/ProductDetails";

class PublicRoutes extends Component {
  render() {
    return (
      <MuiThemeProvider theme={PublicTheme}>
        <AppBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/categories" component={AllCategories} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/product/:productId" component={ProductDetails} />
        </Switch>
      </MuiThemeProvider>
    );
  }
}

export default PublicRoutes;