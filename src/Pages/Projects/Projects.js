import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { CSSCardBody } from './_styles'

import { ProjectData } from '../../data'


export function Projects() {
    return (
        <Container>
            <Row>
                {ProjectData.map((project, i) => (
                    <Col xs={6} md={4}>
                        <Card bg="dark">
                            <CSSCardBody>
                                <Card.Img variant="top" src={project.img} />
                                <Card.Body>
                                    <Card.Title>{project.title}</Card.Title>
                                    <Card.Text>{project.description}</Card.Text>
                                </Card.Body>
                            </CSSCardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}
