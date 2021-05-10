import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import Loader from "../Loader";
import Message from "../Message";
import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { courseDetails } from "../../actions/courseActions";
import { useDispatch, useSelector } from "react-redux";

const CourseView = () => {
  const { id } = useParams();
  const user = JSON.parse(localStorage.getItem("userInfo"));

  const dispatch = useDispatch();
  const courseDetail = useSelector((state) => state.courseDetail);
  const { loading, error, course } = courseDetail;

  useEffect(() => {
    dispatch(courseDetails(id, user.token));
  }, []);
  return (
    <>
      <div className="bg">
        <Navbar search={false} />
        {loading && <Loader />}
        {error && <Message title="Error" variant="danger" msg={error} />}
        {course && (
          <div className="bg">
            <Container className="d-flex my-3">
              <Link to="/main-page">
                <Button variant="outline-danger" className="mr-auto">
                  Go Back
                </Button>
              </Link>
              <Link to={`/course/${id}/quiz`} className="ml-auto">
                <Button variant="outline-success">Start Quiz</Button>
              </Link>
            </Container>
            <Container className="pb-5">
              <Card className="pt-3">
                <h1>{course.title}</h1>
                <Card.Body className="text-center">
                  <iframe
                    width="800"
                    height="375"
                    src={course.video_link}
                    frameborder="0"
                    allowFullScreen
                  >
                    {" "}
                  </iframe>
                  <div>
                    <p>{course.description}</p>
                  </div>
                </Card.Body>
              </Card>
            </Container>
          </div>
        )}
      </div>
    </>
  );
};

export default CourseView;
