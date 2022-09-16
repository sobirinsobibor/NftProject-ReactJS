import React from "react";
import { Carousel, Card,  Button, Row, Col } from "react-bootstrap";
import "./sliderCard.css";

export default function SliderCard() {
  return (
    <div>
      <Carousel interval={null}>
        <Carousel.Item>
          <div  className="card-group">
            <Row lg={3} md={2} sm={1} xs={1}>
                <Col>
                <Card className="main-card">
                <Card.Body className="info-area">
                  <Card.Text>
                    {/* <p className="justify-text"> */}
                      test
                    {/* </p> */}
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Button variant="primary" className="button-explore">
                    Read More
                  </Button>
                </Card.Body>
              </Card>
                </Col>
                <Col>
                <Card className="main-card">
                <Card.Body className="info-area">
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Button variant="primary" className="button-explore">
                    Read More
                  </Button>
                </Card.Body>
              </Card>
                </Col>
                <Col>
                <Card className="main-card">
                <Card.Body className="info-area">
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Button variant="primary" className="button-explore">
                    Read More
                  </Button>
                </Card.Body>
              </Card>
                </Col>
            </Row>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div  className="card-group">
            <Row lg={3} md={2} sm={1} xs={1}>
                <Col>
                <Card className="main-card">
                <Card.Body className="info-area">
                  <Card.Text>
                    {/* <p className="justify-text"> */}
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer
                    {/* </p> */}
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Button variant="primary" className="button-explore">
                    Read More
                  </Button>
                </Card.Body>
              </Card>
                </Col>
                <Col>
                <Card className="main-card">
                <Card.Body className="info-area">
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Button variant="primary" className="button-explore">
                    Read More
                  </Button>
                </Card.Body>
              </Card>
                </Col>
                <Col>
                <Card className="main-card">
                <Card.Body className="info-area">
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Button variant="primary" className="button-explore">
                    Read More
                  </Button>
                </Card.Body>
              </Card>
                </Col>
            </Row>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div  className="card-group">
            <Row lg={3} md={2} sm={1} xs={1}>
                <Col>
                <Card className="main-card">
                <Card.Body className="info-area">
                  <Card.Text>
                    {/* <p className="justify-text"> */}
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer
                    {/* </p> */}
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Button variant="primary" className="button-explore">
                    Read More
                  </Button>
                </Card.Body>
              </Card>
                </Col>
                <Col>
                <Card className="main-card">
                <Card.Body className="info-area">
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Button variant="primary" className="button-explore">
                    Read More
                  </Button>
                </Card.Body>
              </Card>
                </Col>
                <Col>
                <Card className="main-card">
                <Card.Body className="info-area">
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Button variant="primary" className="button-explore">
                    Read More
                  </Button>
                </Card.Body>
              </Card>
                </Col>
            </Row>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
