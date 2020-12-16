import Axios from "axios";
import { Card, Form } from "semantic-ui-react";
import ErrorPage1 from "../components/ErrorPage1";
import SpinnerBasic from "../components/SpinnerBasic";
import { useAxiosOnMount } from "../hooks/axiosHooks";
import Review from "./Review";
import { useState } from "react";

export default ({ productId }) => {
  const [reviews, loading, error, setReviews] = useAxiosOnMount(
    `/api/products/${productId}/reviews`
  );

  const [text, setText] = useState("");

  const deleteReview = async (id) => {
    let res = await Axios.delete(`/api/products/${productId}/reviews/${id}`);
    let filterReviews = reviews.filter((r) => r.id !== id);
    setReviews(filterReviews);
  };

  const editReview = async (id, review) => {
    let res = await Axios.put(
      `/api/products/${productId}/reviews/${id}`,
      review
    );
    let updatedReviews = reviews.map((r) => (r.id !== id ? r : res.data));
    setReviews(updatedReviews);
  };

  const addReview = async () => {
    let res = await Axios.post(`/api/products/${productId}/reviews`, {
      text: text,
    });
    setReviews([...reviews, res.data]);
    setText("");
  };

  const renderBody = () => {
    if (loading) return <SpinnerBasic />;
    if (error) return <ErrorPage1 err={error} />;
    return reviews.map((r) => (
      <Review
        editReview={editReview}
        deleteReview={deleteReview}
        key={`r-${r.id}`}
        {...r}
      />
    ));
  };

  return (
    <Card.Content>
      <Card.Header>Reviews</Card.Header>
      {renderBody()}
      <Form onSubmit={addReview}>
        <Form.Input value={text} onChange={(e) => setText(e.target.value)} />
        <Form.Button>add</Form.Button>
      </Form>
    </Card.Content>
  );
};
