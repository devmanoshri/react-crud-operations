import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Read from "../read/read";
export default function Create() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  //console.log(firstName);
  // console.log(lastName);
  const sendDataToAPI = () => {
    axios.post("https://6349400fa59874146b1b1b6b.mockapi.io/crud", {
      firstName,
      lastName,
    });
  };

  return (
    <div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            placeholder="Enter First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            placeholder="Enter Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={sendDataToAPI}>
          Submit
        </Button>
      </Form>
      <div className="read-block">
        <Read />
      </div>
    </div>
  );
}
