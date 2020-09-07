import React from "react";
import { Container } from "semantic-ui-react";

function Details() {
  return (
    <Container
      textAlign="center"
      text
      style={{ maxWidth: "100%", overflow: "auto", align: "center" }}
    >
      <span className="howtxt">
      <h1 style={{color:"teal"}}>How It Works</h1>After sending us your data via API call, our platform through a 
combination of human work and review, smart tools, 
statistical confidence checks and machine learning checks 
returns scalable, accurate ground truth data.<br/>
    <h2 style={{color:"teal"}}>Technology Enabled</h2>
    ML-powered annotation tooling and quality assurance systems deliver high quality at low cost.
    <h2 style={{color:"teal"}}>Flexibility</h2> 
    Operational excellence to provide extreme flexibility on quality and annotation requirements. 
    <h2 style={{color:"teal"}}style={{color:"teal"}}>Efficiency</h2>
    Efficiently scale large and multiple data pipelines to realize the impact of AI/ML projects.  
    </span>
    
    </Container>
  );
}

export default Details;
  