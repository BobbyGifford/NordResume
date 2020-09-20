import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { CSSFeature } from './_styles/Feature';
export function Feature() {
  return (
    <CSSFeature>
      <Jumbotron className='d-none d-lg-block shadow'>
        <img
          src='https://esoteric-social-pics.s3-us-west-2.amazonaws.com/profile_pic.jpg'
          alt='This is a profile pic'
        />
        <h1>I am Bobby</h1>
        <p>
          Check out my projects below{' '}
          <span role='img' aria-label='emoji'>
            &#128512;
          </span>
        </p>
      </Jumbotron>
    </CSSFeature>
  );
}
