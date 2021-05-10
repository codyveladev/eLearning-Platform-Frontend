import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { courseDetails } from "../../actions/courseActions";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar";
import Loader from "../Loader";
import Message from "../Message";
import { Container, Row, Form, Button, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios";

const Quiz = () => {
  const { id } = useParams();
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();
  const courseDetail = useSelector((state) => state.courseDetail);
  const { loading, error, course } = courseDetail;

  useEffect(() => {
    dispatch(courseDetails(id, user.token));
  }, []);

  const fetchScoreQuiz = async (quizId, answers) => {
    let postData = {
      quizId,
      userAns: answers,
    };
    
    let axiosConfig = {
      headers: {
        Authorization: "Bearer " + user.token,
      },
    };
    let { data } = await axios.post(
      "http://localhost:8080/api/quizzes/score",
      postData,
      axiosConfig
    );

    return data;
  };

  const onSubmit = async (data) => {
    console.log(data);
    let ans = Object.values(data);
    console.log(ans);
    let score = await fetchScoreQuiz(course.quiz._id, ans);
    console.log(score);
  };

  return (
    <div className="bg">
      <Navbar search={false} />
      {loading && <Loader />}
      {error && <Message title="error" variant="danger" msg={error} />}
      <Container>
        <Container className="p-4">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
              {course.quiz &&
                course.quiz.questions.map((item, index) => {
                  return (
                    <>
                      <Card className="p-4 m-3">
                        <h3 key={index}>
                          Question {index + 1}: {item}
                        </h3>
                        <Form.Control
                          as="select"
                          id={index}
                          name={`question${index + 1}`}
                          ref={register}
                          size="lg"
                        >
                          {course.quiz.answers[index].map((ans, idx) => {
                            return (
                              <option
                                key={Math.floor(Math.random() * 500)}
                                value={ans}
                              >
                                {ans}
                              </option>
                            );
                          })}
                        </Form.Control>
                      </Card>
                    </>
                  );
                })}
            </Form.Group>
            <Button type="submit" variant="outline-success" block>
              Submit
            </Button>
          </Form>
        </Container>
      </Container>
    </div>
  );
};

export default Quiz;
