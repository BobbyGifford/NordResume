import React from 'react';
import { Row, Col, Card as BsCard, Button } from 'react-bootstrap';
import { CSSCardBody, CSSCardTech } from './_styles';

export function Card(props) {
  return (
    <Row>
      {props.projects.map((project, i) => (
        <Col xs={12} md={4} key={i}>
          <BsCard bg='dark' style={{ marginTop: '2vh' }}>
            <CSSCardBody>
              <BsCard.Img variant='top' src={project.img} />
              <BsCard.Body>
                <BsCard.Title>{project.title}</BsCard.Title>
                <BsCard.Text as='div'>
                  {project.description}
                  <br />
                  <br />
                  {project.tech.map((techItem) => (
                    <CSSCardTech key={techItem}>{techItem} </CSSCardTech>
                  ))}
                  {project.link && (
                    <Button variant='flat' href={project.link} block>
                      View
                    </Button>
                  )}
                </BsCard.Text>
              </BsCard.Body>
            </CSSCardBody>
          </BsCard>
        </Col>
      ))}
    </Row>
  );
}
