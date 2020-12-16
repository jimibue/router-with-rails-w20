import { Header } from "semantic-ui-react";
import { useState, useEffect } from "react";
import Axios from "axios";
import { useAxiosOnMount } from "../hooks/axiosHooks";
import SpinnerBasic from "../components/SpinnerBasic";
import ErrorPage1 from "../components/ErrorPage1";
export default () => {
  const [products, loadingProducts, productError] = useAxiosOnMount(
    "/api/products1"
  );

  if (loadingProducts) {
    return <SpinnerBasic />;
  }
  if (productError) {
    return <ErrorPage1 err={productError} />;
  }
  return (
    <>
      <Header>Amazon Home Page (SPA DEMO)</Header>
      {products.map((p) => (
        <p>{p.name}</p>
      ))}
    </>
  );
};
