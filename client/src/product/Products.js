import { Card } from "semantic-ui-react";
import ErrorPage1 from "../components/ErrorPage1";
import SpinnerBasic from "../components/SpinnerBasic";
import Product from "./Product";

export default ({ products, loading, error }) => {
  if (loading) {
    return <SpinnerBasic paragraph />;
  }
  if (error) {
    return <ErrorPage1 err={error} />;
  }
  return (
    <Card.Group>
      {products.map((p) => (
        <Product key={p.id} {...p} />
      ))}
    </Card.Group>
  );
};
