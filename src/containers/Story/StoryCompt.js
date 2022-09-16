import React from "react";
import { Row, Col, Card, Button, Container } from "react-bootstrap";
import './StoryCompt.css'

export default function StoryCompt() {
  return (
    <div>
        <Container>
      <div className="story-card-group">
        <Row lg={3} md={2} sm={1} xs={1}>
          <Col>
            <Card className="story-main-card">
              <Card.Img variant="top" src="https://www.colorcombos.com/images/colors/FFFDD0.png" className=" story-card-img"/>
              <Card.Body>
                <Card.Title className="story-card-title" >Otan Series</Card.Title>
                <Button variant="primary" className="story-button mt-3" href="/story/otan">
                    Read More
                  </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
          <Card className="story-main-card">
              <Card.Img variant="top" src="https://www.colorcombos.com/images/colors/FFFDD0.png" className=" story-card-img" />
            
                <Card.Body>
                <Card.Title className="story-card-title">Dumbo Series</Card.Title>
                <Button variant="primary" className="story-button mt-3"  href="/story/dumbo">
                    Read More
                  </Button>
              </Card.Body>
              
            </Card>
          </Col>
          <Col>
          <Card className="story-main-card">
              <Card.Img variant="top" src="https://www.colorcombos.com/images/colors/FFFDD0.png" className=" story-card-img" />
        
                <Card.Body>
                <Card.Title className="story-card-title">Tiger Series</Card.Title>
                <Button variant="primary" className="story-button mt-3"  href="/story/tiger">
                    Read More
                  </Button>
              </Card.Body>
            </Card>
          </Col>
          {/* <Col>
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
          </Col> */}
        </Row>
      </div>
      </Container>
    </div>
  );
}
