import React, { useState, useEffect } from "react";
//import "./styles/forms.css";
import {
  Button,
  Form,
  Grid,
  Segment,
  Header,
  Message,
  Tab,
} from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";

const ENDPOINTUSER =
  "https://image-annotation-backend.herokuapp.com/user/login";
const ENDPOINTANN =
  "https://image-annotation-backend.herokuapp.com/annotator/login";

function LoginForm(props) {
  const [load, setLoad] = useState(false);
  const [errors, setErrors] = useState({});
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const panes = [
    {
      menuItem: "User",
      render: () => (
        <Tab.Pane attached={false}>
          <Form error size="large" onSubmit={handleSubmitUser}>
            <Segment raised inverted color="teal" secondary className="zoomIn">
              <Form.Input
                fluid
                onChange={handleUsernameChange}
                icon="address card"
                iconPosition="left"
                placeholder="Username"
                name="username"
                type="input"
                className="zoomIn"
              />
              <Form.Input
                fluid
                onChange={handlePasswordChange}
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                name="password"
                type="password"
                className="zoomIn"
              />

              <Button
                type="submit"
                className="zoomIn"
                loading={load}
                onClick={() => setLoad(true)}
              >
                Login
              </Button>
              <Button inverted as={Link} to="/signup" className="zoomIn">
                Sign Up
              </Button>
            </Segment>
            {Object.entries(errors).length > 0 && (
              <Message
                error
                header="Could Not Sign In"
                list={Object.keys(errors).map((key) => errors[key])}
                size="small"
                className="zoomIn"
              />
            )}
          </Form>
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Annotator",
      render: () => (
        <Tab.Pane attached={false}>
          <Form error size="large" onSubmit={handleSubmitAnnotator}>
            <Segment raised inverted color="teal" secondary className="zoomIn">
              <Form.Input
                fluid
                onChange={handleUsernameChange}
                icon="address card"
                iconPosition="left"
                placeholder="Username"
                name="username"
                type="input"
                className="zoomIn"
              />
              <Form.Input
                fluid
                onChange={handlePasswordChange}
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                name="password"
                type="password"
                className="zoomIn"
              />

              <Button
                type="submit"
                className="zoomIn"
                loading={load}
                onClick={() => setLoad(true)}
              >
                Login
              </Button>
              <Button inverted as={Link} to="/signup" className="zoomIn">
                Sign Up
              </Button>
            </Segment>
            {Object.entries(errors).length > 0 && (
              <Message
                error
                header="Could Not Sign In"
                list={Object.keys(errors).map((key) => errors[key])}
                size="small"
                className="zoomIn"
              />
            )}
          </Form>
        </Tab.Pane>
      ),
    },
  ];

  document.title = "DaNotate | Login";

  const handleUsernameChange = (event) => setUsername(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  //if (submitResponse === true) props.history.push("/dashboard");

  useEffect(() => {
    if (Object.entries(errors).length > 0) setLoad(false);
  }, [errors]);

  function handleSubmitUser(data) {
    let error = {};
    if (!password || !username) {
      error.fill = "Make sure you fill in all the fields";
      setLoad(false);
    }

    setErrors(error);

    if (!Object.entries(error).length > 0)
      axios
        .get(
          ENDPOINTUSER,
          {},
          {
            auth: {
              username,
              password,
            },
          }
        )
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
          setLoad(false);
        });
  }

  function handleSubmitAnnotator(data) {
    let error = {};
    if (!password || !username)
      error.fill = "Make sure you fill in all the fields";

    setErrors(error);

    if (!Object.entries(error).length > 0)
      axios
        .get(
          ENDPOINTANN,
          {},
          {
            auth: {
              username: data.username,
              password: data.password,
            },
          }
        )
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
  }

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header
          as="h2"
          textAlign="center"
          className="zoomIn"
          style={{ color: "#008080" }}
        >
          Hello, there. Login to your account
        </Header>
        <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
      </Grid.Column>
    </Grid>
  );
}

export default withRouter(LoginForm);