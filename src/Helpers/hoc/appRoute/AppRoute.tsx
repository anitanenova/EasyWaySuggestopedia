import React from "react";
import { Route } from "react-router-dom";

const appRoute = ({ component: Component, layout: Layout, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

export default appRoute;
