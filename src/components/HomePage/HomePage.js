import React from "react";
import HomeNav from "./HomeNav";
import HomeBody from "./HomeBody";
import AnimatedText from "./AnimatedText";
import HowText from "./HowText";
import "./styles.css";
import Details from "./Details";
import CarouselHP from "./CarouselHP";
import { Link, withRouter } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";

function HomePage() {
  document.title = "DaNotate | Home";

  return (
    <div>
      <HomeNav />
      <AnimatedText textColor="grey" overlayColor="#008080">
        DaNotate
      </AnimatedText>
      <Details />
      <CarouselHP />
      <HomeBody />
      <HowText />
      <Link
        to="/adminlogin"
        style={{ position: "fixed", bottom: "3px", right: "3px" }}
      >
        <Button color="blue" animated>
          <Button.Content visible>Administrator</Button.Content>
          <Button.Content hidden>
            <Icon name="user secret" />
          </Button.Content>
        </Button>
      </Link>
    </div>
  );
}

export default withRouter(HomePage);
