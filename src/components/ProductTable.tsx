import Avatar from "@material-ui/core/Avatar";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React, { FunctionComponent } from "react";
import { Product } from "../api";
import { CURRENCY } from "../constants";
import { formatPrice } from "../utils";

export type ProductTableProps = {
  products: Array<Product>;
};

const ProductTable: FunctionComponent<ProductTableProps> = (props) => {
  const sortedProducts = props.products.sort((a, b) => {
    return a.product.name.localeCompare(b.product.name);
  });
  return (
    <TableContainer style={{ maxHeight: "90vh" }}>
      <Table aria-label="product table">
        <TableHead>
          <TableRow>
            <TableCell width="5%">Image</TableCell>
            <TableCell width="40%">Name</TableCell>
            <TableCell align="center" width="15%">
              Current price
            </TableCell>
            <TableCell align="center" width="15%">
              Price drop
            </TableCell>
            <TableCell align="center" width="15%">
              Price drop percentage
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedProducts.map((product) => (
            <TableRow key={product.id}>
              <TableCell component="th" scope="row">
                <Avatar
                  alt="product image"
                  src={product.product.media.product_images.first["800"]}
                />
              </TableCell>
              <TableCell>{product.product.name}</TableCell>
              <TableCell align="center">
                {product.price.display.offer}
              </TableCell>
              <TableCell align="center">
                {formatPrice(product.price.compare - product.price.offer)}{" "}
                {CURRENCY}
              </TableCell>
              <TableCell align="center">
                {product.price.diff_percentage}%
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductTable;
