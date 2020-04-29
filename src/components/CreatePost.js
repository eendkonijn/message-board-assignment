import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import "./CreatePost.scss";
import Spinner from "react-bootstrap/Spinner";

const CreatePost = () => {
  const { register, handleSubmit, errors } = useForm();
  const [fetching, setFetching] = useState(false);
  const [fetched, setFetched] = useState(false);
  const newMessage = {};

  const onSubmit = async (data) => {
    setFetching(true);
    const settings = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      mode: "cors",
      body: JSON.stringify(data),
    };

    try {
      const response = await fetch("http://localhost:3000/messages", settings);
      const data = await response.json();
      if (response.ok) {
        setFetching(false);
        setFetched(true);
        newMessage = data;
      }
      return data;
    } catch (e) {
      console.log(e.message);
      setFetched(false);
      setFetching(false);
      return e;
    }
  };

  useEffect(() => {
    //cleanup function?
  });

  if (fetched) {
    return (
      <Redirect to={{ pathname: "/details", state: { message: newMessage } }} />
    );
  }
  return (
    <>
      <div className="flex-container">
        <div className="create-post">
          <Form onSubmit={handleSubmit(onSubmit)} className="create-post__form">
            <h1>Plaats een nieuw bericht</h1>
            <Form.Group>
              <Form.Label>Voornaam:</Form.Label>
              <Form.Control
                name="firstName"
                placeholder="Vul je voornaam in"
                ref={register({ required: true, minLength: 2 })}
                disabled={fetching}
              />
              {errors.firstName && errors.firstName.type === "minLength" && (
                <p className="create-post__errormessage">
                  {" "}
                  vul minimaal twee tekens in
                </p>
              )}
              {errors.firstName && errors.firstName.type === "required" && (
                <p className="create-post__errormessage">vul een voornaam in</p>
              )}

              <br />

              <Form.Label>Last Name </Form.Label>
              <Form.Control
                name="lastName"
                placeholder="Vul je achternaam in"
                ref={register({ required: true, minLength: 2 })}
                disabled={fetching}
              />
              {errors.lastName && errors.lastName.type === "minLength" && (
                <p className="create-post__errormessage">
                  {" "}
                  vul minimaal twee tekens in
                </p>
              )}
              {errors.lastName && errors.lastName.type === "required" && (
                <p className="create-post__errormessage">
                  vul een achternaam in
                </p>
              )}
              <br />
              <label>Email: </label>
              <Form.Control
                name="email"
                placeholder="Vul je e-mailadres in"
                ref={register({
                  required: true,
                  pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,9})+$/,
                })}
                disabled={fetching}
              />
              {errors.email && errors.email.type === "pattern" && (
                <p className="create-post__errormessage">
                  {" "}
                  vul een geldig emailadres in
                </p>
              )}
              {errors.email && errors.email.type === "required" && (
                <p className="create-post__errormessage">
                  e-mailadres is verplicht
                </p>
              )}
              <br />
              <label>Onderwerp: </label>
              <Form.Control
                as="select"
                name="category"
                ref={register({ required: true })}
                disabled={fetching}
              >
                <option value="">Select...</option>
                <option value="On-topic">Relevant</option>
                <option value="Slightly On-topic">Enigszins relevant</option>
                <option value="Off-topic">Niet relevant</option>
              </Form.Control>
              {errors.category && errors.category.type === "required" && (
                <p className="create-post__errormessage">
                  Selecteer een categorie
                </p>
              )}
              <br />
              <label>Title: </label>
              <Form.Control
                name="title"
                placeholder="Vul een titel in"
                ref={register({ required: true, minLength: 2 })}
                disabled={fetching}
              />
              {errors.title && errors.title.type === "required" && (
                <p className="create-post__errormessage">Geef een titel</p>
              )}
              {errors.title && errors.title.type === "minLength" && (
                <p className="create-post__errormessage">
                  {" "}
                  een titel bestaat uit minimaal twee tekens
                </p>
              )}
              <br />
              <label>Message: </label>
              <Form.Control
                as="textarea"
                rows="4"
                name="body"
                placeholder="Typ hier je bericht"
                ref={register({ required: true, minLength: 20 })}
                disabled={fetching}
              />
              {errors.body && errors.body.type === "required" && (
                <p className="create-post__errormessage">
                  Je moet een bericht schrijven
                </p>
              )}
              {errors.body && errors.body.type === "minLength" && (
                <p className="create-post__errormessage">
                  Een bericht bestaat uit minimaal 20 karakters
                </p>
              )}
              <br />
            </Form.Group>
          </Form>
        </div>
        <div className="buttons create-post__buttons">
          {fetching && <Spinner animation="border" variant="success" />}
          <span className="button">
            <Button
              variant="dark"
              type="submit"
              onClick={handleSubmit(onSubmit)}
              disabled={fetching}
            >
              Bevestig
            </Button>
          </span>
          <span className="button">
            <Link to="/">
              <Button variant="dark">Ga Terug</Button>
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
