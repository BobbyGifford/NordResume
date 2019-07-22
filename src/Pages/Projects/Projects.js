import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { CSSCardBody, CSSCardTech, CSSBuiltUsing } from './_styles'

import { ProjectData } from '../../data'

export function Projects() {
    return (
        <Container>
            <Row>
                {ProjectData.map((project, i) => (
                    <Col xs={12} md={4} key={i}>
                        <Card bg="dark" style={{ marginTop: '2vh' }}>
                            <CSSCardBody>
                                <Card.Img variant="top" src={project.img} />
                                <Card.Body>
                                    <Card.Title>{project.title}</Card.Title>
                                    <Card.Text as="div">
                                        {project.description}
                                        <CSSBuiltUsing>
                                            <h6>Built Using:</h6>
                                        </CSSBuiltUsing>
                                        <Row>
                                            {project.tech.map((techItem) => (
                                                <CSSCardTech key={techItem}>
                                                    {techItem}
                                                </CSSCardTech>
                                            ))}
                                        </Row>
                                    </Card.Text>
                                </Card.Body>
                            </CSSCardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}
