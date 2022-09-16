import React from "react";
import { Row, Container } from "react-bootstrap";
import "./contentcompt.css";

export default function ContentCompt() {
  return (
    <div className="mt-5">
      <Container>
        <Row>
          <h3 className="title-IKPArt">IKPArt</h3>
        </Row>
        <Row>
          <p className="p-about">
            <span style={{color:"#2B2C33"}}>IKPArt </span>
            <span style={{color:"#55F81C"}} >
              is an NFT creator who attaches importance to the meaning,
              story and emotions of the creator in each of his ARTworks. </span>
            <span style={{color:"#1544E9"}} >
               Every work we make contains the emotions of the creator which is
              expressed in the form of art. </span>
            <span style={{color:"#FDF7F7"}} >
               Because only with art can we express all emotions into a ARKwork.
            </span>
          </p>
        </Row>
      </Container>
    </div>
  );
}
