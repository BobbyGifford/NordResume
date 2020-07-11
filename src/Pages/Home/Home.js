import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import { Feature } from '../../Components/Feature/Feature';
import { Projects } from '../Projects/Projects';

export function Home() {
  return (
    <>
      <Helmet>
        <title>{"Bobby's Resume | Home"}</title>
        <meta
          name='description'
          content={"This is Bobby Gifford's personal resume website."}
        />
        {/* <meta name='og:image' content={} /> */}
      </Helmet>
      <Container>
        <Feature />
      </Container>
      <Projects />
    </>
  );
}
