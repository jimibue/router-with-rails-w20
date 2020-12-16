import { Header } from "semantic-ui-react";
import { useState, useEffect } from "react";
import Axios from "axios";
import { useAxiosOnMount } from "../hooks/axiosHooks";
import SpinnerBasic from "../components/SpinnerBasic";
import ErrorPage1 from "../components/ErrorPage1";
import Products from "../product/Products";
export default () => {
  const [products, loadingProducts, productError] = useAxiosOnMount(
    "/api/products"
  );

  return (
    <>
      <Header>Amazon Home Page (SPA DEMO)</Header>
      <Products
        products={products}
        loading={loadingProducts}
        error={productError}
      />
    </>
  );
};
