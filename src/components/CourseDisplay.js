import React from "react";
import { Row, Col, Image, Container, Button } from "react-bootstrap";
import {Link} from 'react-router-dom' 

const CourseDisplay = ({ id, title, image, description, author }) => {
  return (
    <>
      <Container className="border shadow mt-4">
        <Row className="py-4">
          <Col md={4}>
            <Container className="border">
              <Image
                id="course-thumbnail"
                src={image}
                alt="video-thumbnail"
                fluid
              />
            </Container>
          </Col>
          <Col md={8} className="align-items-center">
            <h2>{title}</h2>
            <p>{description}</p>
            <p>Created by: {author}</p>
            <Link to={`/course/${id}`}>
              <Button variant="outline-success" size="lg">
                Start Learning
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CourseDisplay;
