import React, {Component} from 'react'
import "./index.css";
import Header from '../../component/Header'
import {Container, Row, Col} from 'react-bootstrap'
import Welcome from './Welcome'
import CardCompt from './CardCompt'

export default function Home() {
  return (
    <div>
        <div>
            <Header/>
        </div>
        <div className='mt-5'>
            <Container>
                <Row lg={2} md={1} xs={1} sm={1}>
                    <Col style={{display: 'flex', justifyContent: 'center'}} lg={{order:'first'}} md={{order:'last'}}  xs={{order:'last'}} sm={{order:'last'}} >
                        <Welcome/>
                    </Col>
                    <Col style={{display: 'flex', justifyContent: 'center'}} lg={{order:'last'}} md={{order:'first'}} sm={{order:'first'}} xs={{order:'first'}}>
                        <CardCompt/>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
  )
}
