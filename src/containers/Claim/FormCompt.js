import React from "react";
import './FormCompt.css';
import { Container, Row, Form, Button } from "react-bootstrap";
import emailjs from 'emailjs-com'

export default function FormCompt() {

  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_Claim_NFT', e.target, 'user_kiFJcuU77Kd1L9tRzoy6C')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }
  return (
    <div>
      <Container>
        <Row  className="title-padding" >
          <h3>
            if you have 3 NFT from otan series or <br/> dumbo series you can claim
            your free special NFT
          </h3>
        </Row>
        <Row>
          <Form onSubmit={sendEmail} >
            <Form.Group className="mb-2" >
              <Form.Label></Form.Label>
              <Form.Control type="text" placeholder="enter your wallet address here" className="form-input" name="wallet" />
              <Form.Text className="text-muted">
                We'll never share your wallet with anyone else.
              </Form.Text>
            </Form.Group>
            <div className="text-center" >
            <Button variant="primary" className="button-submit">Submit</Button>
            </div>
          </Form>
        </Row>
      </Container>
    </div>
  );
}
