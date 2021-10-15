import React from "react";
import { Route } from "react-router-dom";

import HomeLayout from "../Layout/Home.Layout";

const HomeLayoutHOC = ({ component: Component, ...rest }) => {
  return (
    <>
      <Route
        {...rest}
        component={(props) => (
          <HomeLayout>
            <Component {...props} />
          </HomeLayout>
        )}
      />
    </>
  );
};
export default HomeLayoutHOC;
