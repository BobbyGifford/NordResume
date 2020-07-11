import React from 'react';
import { Container } from 'react-bootstrap';
import { Feature } from '../../Components/Feature/Feature';
import { Projects } from '../Projects/Projects';

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
