import React from "react";
import { Card, Button, Row, Container, Stack } from "react-bootstrap";
import "./CardCompt.css";

export default function CardCompt() {
  return (
    <div className="sp-padding" >
      <Card className="card-compt">
        <Card.Img
          variant="top"
          src="https://forum.reallusion.com/uploads/images/7e71c403-8a4c-4190-aa54-a10c.png"
          className="card-img mt-3"
        />
        <Card.Body>
          <Container>
            <Row>
              <Stack direction="horizontal" gap={2}>
                <div><Card.Title className="title-card mt-1" >Otan Series</Card.Title></div>
                <div className="ms-auto"><Button variant="primary" className="button-explore">EXPLORE</Button></div>
              </Stack>
            </Row>
            <Row className="mt-3 information" >
            <Stack direction="horizontal" gap={3}>
                <div><p className="mt-2">Current bid <br/> 0.99 ETH </p></div>
                <div className="ms-auto mt-2"><p>Ends in <br/>25 HRS</p></div>
                <div className="ms-auto"> <Button className="information-button ">Start Bid</Button> </div>
              </Stack>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </div>
  );
}
