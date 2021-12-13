import React, { Component, useState, useCallback } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import axios from "axios";

import Carousell from "../Home/Carousell"

const Contacts = (props) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();

  const handleChange = useCallback((setState, event) => {
      setState(event.target.value);
  }, []);
  
  const handleSubmit = useCallback(async () => {
      const response = await axios.post("/api/form", {
          name,
          email,
          subject
      });
      console.log(response)
  }, [name, email, subject]);


  return (
    <>
      <Form className="col-xs-12 col-md-6" onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="name">name:</Label>
          <Input
            type="text"
            name="name"
            onChange={handleChange.bind(null, setName)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email:</Label>
          <Input
            type="email"
            name="email"
            onChange={handleChange.bind(null, setEmail)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="subject">Subject:</Label>
          <Input
            type="textarea"
            name="subject"
            onChange={handleChange.bind(null, setSubject)}
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>

      <hr />
      <Carousell />
    </>
  );
  
}

export default Contacts;