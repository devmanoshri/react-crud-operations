import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

export default function Read() {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
      color: isActive ? "green" : "gray",
    };
  };
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios
      .get("https://6349400fa59874146b1b1b6b.mockapi.io/crud")
      .then((getData) => setApiData(getData.data));
  });
  const setData = (id, firstName, lastName) => {
    localStorage.setItem("Id", id);
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
  };

  const getData = () => {
    axios
      .get("https://6349400fa59874146b1b1b6b.mockapi.io/crud")
      .then((getData) => setApiData(getData.data));
  };

  const onDelete = (id) => {
    axios
      .delete(`https://6349400fa59874146b1b1b6b.mockapi.io/crud/${id}`)
      .then(() => {
        getData();
      });
  };
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {apiData.map((data) => {
            return (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>
                  <NavLink style={navLinkStyles} to="/update">
                    <Button
                      variant="primary"
                      onClick={() =>
                        setData(data.id, data.firstName, data.lastName)
                      }
                    >
                      Update
                    </Button>
                  </NavLink>
                  <NavLink style={navLinkStyles} to="/delete">
                    <Button variant="danger" onClick={() => onDelete(data.id)}>
                      Delete
                    </Button>
                  </NavLink>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
