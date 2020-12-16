import { Button, Card, Form, Icon } from "semantic-ui-react";
import { useState } from "react";

export default ({ text: initText, id, deleteReview, editReview }) => {
  const [showForm, setShowForm] = useState(false);
  const [text, setText] = useState(initText);

  const handleEditReview = () => {
    editReview(id, { text });
    setShowForm(false);
  };

  const renderBody = () => {
    return (
      <>
        {initText}
        <span>
          <Icon color="red" name="times" onClick={() => deleteReview(id)} />
        </span>
        <span>
          <Icon color="blue" name="pencil" onClick={() => setShowForm(true)} />
        </span>
      </>
    );
  };
  const renderForm = () => {
    return (
      <Form onSubmit={handleEditReview}>
        <Form.Input value={text} onChange={(e) => setText(e.target.value)} />
        <Form.Button>add</Form.Button>
        <Button onClick={() => setShowForm(false)}>cancel</Button>
      </Form>
    );
  };
  return (
    <>
      <Card.Description>
        {showForm ? renderForm() : renderBody()}
      </Card.Description>
    </>
  );
};
