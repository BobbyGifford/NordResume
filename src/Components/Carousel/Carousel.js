import React from "react";
import { Carousel as BsCarousel } from "react-bootstrap";
import { CarouselH3 } from "./_style";

export function Carousel(props) {
  // Iterate over first 3 items
  const featureProjects = props.projects.slice(0, 3);
  return (
    <>
      <h2 style={{ textAlign: "center" }}>My Latest Work</h2>
      <BsCarousel interval={2500}>
        {featureProjects.map(project => (
          <BsCarousel.Item>
            <img
              style={{ maxHeight: "500px" }}
              className="d-block w-100"
              src={project.img}
              alt="First slide"
            />
            <BsCarousel.Caption>
              <CarouselH3>{project.title}</CarouselH3>
            </BsCarousel.Caption>
          </BsCarousel.Item>
        ))}
      </BsCarousel>
    </>
  );
}
