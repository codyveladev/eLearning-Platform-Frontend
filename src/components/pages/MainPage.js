import React, { useEffect } from "react";
// import CourseSelect from "../CourseSelect";
import {Container} from 'react-bootstrap'
import CourseDisplay from '../CourseDisplay';
import Footer from "../Footer";

import { listCourses } from "../../actions/courseActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Message from "../Message";
import Loader from "../Loader";

function MainPage() {
  const dispatch = useDispatch();
  const courseList = useSelector((state) => state.courseList);
  const { loading, error, courses } = courseList;
  const history = useHistory();

  useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      history.push("/login");
    }

    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    dispatch(listCourses(userInfo.token));
  }, []);
  return (
    <div>
      {error && <Message variant="danger" msg={error} title="error" />}
      {loading && <Loader />}
      <Container className="overflow-y">
        {courses &&
          courses.map((course) => {
            return (
              <>
                <CourseDisplay
                  title={course.title}
                  description={course.description}
                  image={course.thumbnail}
                  author={course.instructor.userName}
                />
              </>
            );
          })}
      </Container>

      {/* <CourseSelect /> */}
      <Footer />
    </div>
  );
}

export default MainPage;
