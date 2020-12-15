import Axios from "axios";
import { useParams } from "react-router-dom";
import { Button } from "semantic-ui-react";

let dummyReview = {
  text: "awesome",
};

let r = {
  text: "updated",
};

export default () => {
  // can grab the id off the url
  let { productId } = useParams();
  // what do we need
  // product_id
  const readReviews = async () => {
    try {
      let res = await Axios.get(`/api/products/${productId}/reviews`);
      console.log(res.data);
    } catch (err) {}
  };

  const readReview = async (reviewId) => {
    try {
      let res = await Axios.get(
        `/api/products/${productId}/reviews/${reviewId}`
      );
      console.log(res.data);
    } catch (err) {}
  };

  const creatReview = async (review) => {
    try {
      let res = await Axios.post(`/api/products/${productId}/reviews`, review);
      console.log(res.data);
    } catch (err) {}
  };

  const updateReview = async (id, review) => {
    try {
      let res = await Axios.put(
        `/api/products/${productId}/reviews/${id}`,
        review
      );
      console.log(res.data);
    } catch (err) {}
  };

  const deleteReview = async (id) => {
    try {
      let res = await Axios.delete(`/api/products/${productId}/reviews/${id}`);
      console.log(res.data);
    } catch (err) {}
  };
  return (
    <>
      <h1>Reviews Api axios demo</h1>
      <p>{productId}</p>
      <Button onClick={readReviews}>read Reviews</Button>
      <Button onClick={() => readReview(17)}>
        read Review must be on product 9
      </Button>
      <Button onClick={() => creatReview(dummyReview)}>
        create Review must be on product 9
      </Button>
      <Button onClick={() => updateReview(17, r)}>
        update Review must be on product 9
      </Button>
      <Button onClick={() => deleteReview(18)}>
        delete Review must be on product 9
      </Button>
    </>
  );
};
