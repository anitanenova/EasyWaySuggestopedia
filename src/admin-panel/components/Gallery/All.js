import React from "react";
import { List, Pagination } from "react-admin";
import GridList from "./GridList";

const ProductList = (props) => (
  <List
    {...props}
    perPage={20}
    pagination={<Pagination rowsPerPageOptions={[10, 20, 40]} />}
    sort={{ field: "id", order: "ASC" }}
  >
    <GridList />
  </List>
);

export default ProductList;
