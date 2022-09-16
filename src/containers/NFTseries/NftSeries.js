import React from "react";
import { Row, Col, Card, Button, Container } from "react-bootstrap";
import "./NftSeries.css";

export default function NftSeries() {
  return (
    <div>
      <Container>
        <div className="nft-card-group">
          <Row lg={3} md={2} sm={1} xs={1}>
            <Col>
              <Card className="nft-main-card">
                <Card.Img
                  variant="top"
                  src="https://www.colorcombos.com/images/colors/FFFDD0.png"
                  className=" nft-card-img"
                />
                <Card.Body>
                  <Row>
                    <Col>
                      <Card.Title className="nft-card-title">
                        Otan Series
                      </Card.Title>
                    </Col>
                    <Col>
                      <Button variant="primary" className="nft-button">
                        EXPLORE
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
                <Card.Body><small style={{color:"white"}}>30% profit for save orang utan</small></Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="nft-main-card">
                <Card.Img
                  variant="top"
                  src="https://www.colorcombos.com/images/colors/FFFDD0.png"
                  className=" nft-card-img"
                />
                <Card.Body>
                  <Row>
                    <Col>
                      <Card.Title className="nft-card-title">
                        Dumbo Series
                      </Card.Title>
                    </Col>
                    <Col>
                      <Button variant="primary" className="nft-button">
                        EXPLORE
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
                <Card.Body><small style={{color:"white"}}>30% profit for save elephant</small></Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="nft-main-card">
                <Card.Img
                  variant="top"
                  src="https://www.colorcombos.com/images/colors/FFFDD0.png"
                  className=" nft-card-img"
                />
                <Card.Body>
                  <Row>
                    <Col>
                      <Card.Title className="nft-card-title">
                        Tiger Series
                      </Card.Title>
                    </Col>
                    <Col>
                      <Button variant="primary" className="nft-button">
                        EXPLORE
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
                <Card.Body><small style={{color:"white"}}>30% profit for save orang utan</small></Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
