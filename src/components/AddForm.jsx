import React from "react";
import { Button, InputGroup } from "react-bootstrap";

import Form from "react-bootstrap/Form";
function AddForm() {
  return (
    <Form style={{ width: "30rem" }}>
      <Form.Label>Add new task</Form.Label>
      <InputGroup className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" />
        <Button variant="secondary">Add</Button>
      </InputGroup>
    </Form>
  );
}

export default AddForm;
