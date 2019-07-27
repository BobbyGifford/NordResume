import React from "react";
import { Container } from "react-bootstrap";
import { CSSContainer } from "./_styles";
import { Card } from "../../Components/Cards";

import { ProjectData } from "../../data";

export function Projects() {
  return (
    <CSSContainer>
      <Container>
      </Container>
      <Card projects={ProjectData} />
    </CSSContainer>
  );
}
