import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { fetchProductsByName, fetchProductsByNamePrefix, Product } from "./api";
import Navbar from "./components/Navbar";
import ProductTable from "./components/ProductTable";
import SearchBar from "./components/SearchBar";

const useStyles = makeStyles({
  paper: {
    width: "100%",
    minHeight: "90vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  text: {
    alignSelf: "center",
  },
});

function App() {
  const [selectedProducts, setSelectedProducts] = useState<Array<Product>>([]);
  const [statusText, setStatusText] = useState(
    "Start searching by typing the name of the product you are looking for..."
  );

  const classes = useStyles();

  const updateProducts = (products: Array<Product>): void => {
    setSelectedProducts(products);
    if (products.length === 0) {
      setStatusText("Try searcing for something else...");
    }
  };

  const searchByPrefix = async (prefix: string) => {
    if (!prefix) {
      return updateProducts([]);
    }
    updateProducts(await fetchProductsByNamePrefix(prefix));
  };

  const searchByName = async (name: string) => {
    if (!name) {
      return updateProducts([]);
    }
    updateProducts(await fetchProductsByName(name));
  };

  const getProductTable = () => {
    if (selectedProducts.length !== 0) {
      return <ProductTable products={selectedProducts} />;
    }
    return (
      <Typography className={classes.text} variant="h6">
        {statusText}
      </Typography>
    );
  };

  const searchBar = (
    <SearchBar onChange={searchByPrefix} onSubmit={searchByName} />
  );

  return (
    <div>
      <Navbar searchBar={searchBar} />
      <Router>
        <Switch>
          <Route exact path="/">
            <Paper className={classes.paper}>{getProductTable()}</Paper>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
