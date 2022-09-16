import React from "react";
import { Carousel, Row, Col, Card, Button } from "react-bootstrap";
import "./Story_Tiger.css";

export default function Story_Tiger() {
  return (
    <div>
      <Carousel fade interval={null}>
        <Carousel.Item>
          <div className="story-group">
            <Row>
              <Col  className="centered"  >
                <h3 className="story-text" >
                  On February 14, 2019 in the forest there lived an orang utan
                  named Otan. he lives happily in the forest with his family
                  without food shortage
                </h3>
              </Col>
              <Col  className="centered" >
              <Card className="tiger-main-card">
                <Card.Img
                  variant="top"
                  src="https://www.colorcombos.com/images/colors/FFFDD0.png"
                  className=" tiger-card-img"
                />
                <Card.Body>
                      <Card.Title className="tiger-card-title">
                        Tiger Series #1
                      </Card.Title>
                </Card.Body>
              </Card>
              </Col>
            </Row>
          </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="story-group">
            <Row>
              <Col className="centered" >
                <h3 className="story-text">
                7 months passed, there was a distant relative of otan named mr human who wanted to get land so he burned otan's house until otan felt sad because he was separated from his family 
                </h3>
              </Col>
              <Col  className="centered" >
              <Card className="tiger-main-card">
                <Card.Img
                  variant="top"
                  src="https://www.colorcombos.com/images/colors/FFFDD0.png"
                  className=" tiger-card-img"
                />
                <Card.Body>
                      <Card.Title className="tiger-card-title">
                        Tiger Series #2
                      </Card.Title>
                </Card.Body>
              </Card>
              </Col>
            </Row>
          </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="story-group">
            <Row>
              <Col   className="centered" >
                <h3 className="story-text">
                The fire burned down his house and family so that he could not shed tears. Otan even smokes to reduce his stress and sadness, even so Otan does not hold a grudge against Mr Human because he is aware that Otan has intelligence below Mr Human
                </h3>
              </Col>
              <Col  className="centered" >
              <Card className="tiger-main-card">
                <Card.Img
                  variant="top"
                  src="https://www.colorcombos.com/images/colors/FFFDD0.png"
                  className=" tiger-card-img"
                />
                <Card.Body>
                      <Card.Title className="tiger-card-title">
                        Tiger Series #3
                      </Card.Title>
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
