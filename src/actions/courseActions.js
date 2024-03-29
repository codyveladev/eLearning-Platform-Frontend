import {
  COURSE_LIST_REQUEST,
  COURSE_LIST_SUCCESS,
  COURSE_LIST_FAIL,
  COURSE_DETAILS_REQUEST,
  COURSE_DETAILS_SUCCESS,
  COURSE_DETAILS_FAIL,
} from "../constants/courseConstants";

import axios from "axios";

export const listCourses = (token) => async (dispatch) => {
  try {
    dispatch({ type: COURSE_LIST_REQUEST });
    const { data } = await axios.get("http://localhost:8080/api/courses/", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    dispatch({
      type: COURSE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
      dispatch({
          type: COURSE_LIST_FAIL,
          payload: error.response.data
      })
  }
};

export const courseDetails = (id, token) => async (dispatch) => {
  try {
    dispatch({ type: COURSE_DETAILS_REQUEST });
    const { data } = await axios.get(`http://localhost:8080/api/courses/course/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    dispatch({
      type: COURSE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
      dispatch({
          type: COURSE_DETAILS_FAIL,
          payload: error.response.data
      })
  }
};