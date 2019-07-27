import React from "react";
import { Container } from "react-bootstrap";
import { Feature } from "../../Components";
import { Projects } from '../'

export function Home() {
  return (
    <>
      <Container>
        <Feature />
      </Container>
      <Projects />
    </>
  );
}
