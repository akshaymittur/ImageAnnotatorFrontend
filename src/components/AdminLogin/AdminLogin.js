import React, { useState, useEffect } from "react";
import {
  Button,
  Form,
  Grid,
  Segment,
  Header,
  Message,
} from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import { ADMINLOGIN } from "../../routes/routes";

function AdminLogin(props) {
  const [load, setLoad] = useState(false);
  const [errors, setErrors] = useState({});
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  document.title = "DaNotate | Admin Login";

  const handleUsernameChange = (event) => setUsername(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  useEffect(() => {
    if (Object.entries(errors).length > 0) setLoad(false);
  }, [errors]);

  function handleSubmit(data) {
    let error = {};
    if (!password || !username) {
      error.fields = "Make sure you fill in all the fields";
      setLoad(false);
    }

    setErrors(error);

    if (!Object.entries(error).length > 0)
      axios
        .get(ADMINLOGIN, {
          withCredentials: false,
          auth: {
            username,
            password,
          },
        })
        .then((res) => {
          console.log(res);
          setLoad(false);
          props.history.push({
            pathname: "/admindashboard",
            credentials: { username, password },
          });
        })
        .catch((error) => {
          console.log(error);
          setLoad(false);
          setErrors({ invalid: "Invalid Username and Password" });
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
          Hello, there. Login to your admin account
        </Header>
        <Form error size="large" onSubmit={handleSubmit}>
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
            <Button inverted as={Link} to="/adminsignup">
              Request Admin Access
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
      </Grid.Column>
    </Grid>
  );
}

export default withRouter(AdminLogin);
