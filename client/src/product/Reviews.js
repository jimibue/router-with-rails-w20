import { Card } from "semantic-ui-react";
import ErrorPage1 from "../components/ErrorPage1";
import SpinnerBasic from "../components/SpinnerBasic";
import { useAxiosOnMount } from "../hooks/axiosHooks";

export default ({ productId }) => {
  const [reviews, loading, error] = useAxiosOnMount(
    `/api/products/${productId}/reviews`
  );

  const renderBody = () => {
    if (loading) {
      return <SpinnerBasic />;
    }
    if (error) {
      return <ErrorPage1 err={error} />;
    }
    return reviews.map((r) => <Card.Description>{r.text}</Card.Description>);
  };
  return (
    <Card.Content>
      <Card.Header>Reviews</Card.Header>
      {renderBody()}
    </Card.Content>
  );
};
