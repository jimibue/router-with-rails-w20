import Axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Header } from "semantic-ui-react";

// should come from form and pass to function harcoding for now
let dummyNewProduct = {
  name: "test",
  department: "tools",
  description: "nice",
  price: 10.01,
};

// should come from form and pass to function harcoding for now
let dummyUpdateProduct = {
  name: "Updated",
  department: "tools",
  description: "nice",
  price: 10.01,
};

export default () => {
  const [resData, setResData] = useState([]);
  const [products, setProducts] = useState([]);
  const readProducts = async () => {
    try {
      let res = await Axios.get("/api/products");
      console.log(res);
      setResData(res.data);
      setProducts(res.data);
      // once I have res.data i can update UI
    } catch (err) {
      console.log(err);
    }
  };
  const readProduct = async (id) => {
    try {
      let res = await Axios.get(`/api/products/${id}`);
      console.log(res);
      setResData(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const createProduct = async (product) => {
    try {
      let res = await Axios.post("/api/products", product);
      console.log(res);
      setProducts([res.data, ...products]);
    } catch (err) {
      console.log(err);
    }
  };
  const updateProduct = async (id, product) => {
    try {
      let res = await Axios.put(`/api/products/${id}`, product);
      console.log(res);
      setResData(res.data);
      let newProduct = products.map((p) => (p.id !== id ? p : res.data));
      setProducts(newProduct);
    } catch (err) {
      console.log(err);
    }
  };
  const deleteProduct = async (id) => {
    try {
      let res = await Axios.delete(`/api/products/${id}`);
      console.log(res);
      setResData(res.data);
      let newProduct = products.filter((p) => p.id !== res.data.id);
      setProducts(newProduct);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header>Product API Demo</Header>
      <Button onClick={readProducts}>read Products</Button>
      <Button onClick={() => readProduct(3)}>Read Product</Button>
      <Button onClick={() => createProduct(dummyNewProduct)}>
        create Product
      </Button>
      <Button onClick={() => updateProduct(6, dummyUpdateProduct)}>
        update Product
      </Button>
      <Button onClick={() => deleteProduct(5)}>delete Product</Button>
      {/* <div>
        {resData && resData.length
          ? resData.map((r) => <p>{r.name}</p>)
          : resData.name}
      </div> */}
      {products.map((r) => (
        <Link to={`/reviewAPI/${r.id}`}>
          <p>{r.name}</p>
        </Link>
      ))}
    </>
  );
};
