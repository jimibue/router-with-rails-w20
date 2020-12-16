import { Button, Card } from "semantic-ui-react";
import { useState } from "react";
import Reviews from "./Reviews";

export default ({ id, name, description, department, price }) => {
  const [showReviews, setShowReviews] = useState(false);
  return (
    <Card>
      <Card.Content>
        {/* <Image
          floated='right'
          size='mini'
          src='/images/avatar/large/steve.jpg'
        /> */}
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{department}</Card.Meta>
        <Card.Meta>{price}</Card.Meta>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      {showReviews && <Reviews key={`${id}`} productId={id} />}

      <Card.Content extra>
        <div className="ui three buttons">
          <Button basic color="green">
            Edit
          </Button>
          <Button
            basic
            color="green"
            onClick={() => setShowReviews(!showReviews)}
          >
            Reviews
          </Button>
          <Button basic color="red">
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};
