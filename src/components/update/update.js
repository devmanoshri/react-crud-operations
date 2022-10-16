import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
//import Read from "../read/read";
export default function Update() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [Id, setID] = useState(null);
  const sendDataToAPI = () => {
    axios.put(`https://6349400fa59874146b1b1b6b.mockapi.io/crud/${Id}`, {
      firstName,
      lastName,
    });
  };

  useEffect(() => {
    setFirstName(localStorage.getItem("firstName"));
    setLastName(localStorage.getItem("lastName"));
    setID(localStorage.getItem("Id"));
  }, []);

  return (
    <div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            value={firstName}
            placeholder="Enter First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            value={lastName}
            name="lastName"
            placeholder="Enter Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={sendDataToAPI}>
          Update
        </Button>
      </Form>
      {/* <div className="read-block">
        <Read />
      </div> */}
    </div>
  );
}
