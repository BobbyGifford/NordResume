import React from "react";
import { Jumbotron } from "react-bootstrap";
import { CSSFeature } from "./_styles";
export function Feature() {
  return (
    <CSSFeature>
      <Jumbotron className="d-none d-lg-block">
        <img
          src="https://esoteric-social-pics.s3-us-west-2.amazonaws.com/profile_pic.jpg"
          alt="This is a profile pic"
        />
        <h1>I am Bobby</h1>
        <p>Check out my projects below &#128512;</p>
      </Jumbotron>
    </CSSFeature>
  );
}
