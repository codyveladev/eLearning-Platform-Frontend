import React from 'react'
import { Form, FormControl, Button} from 'react-bootstrap'
// import { searchCourse } from "../actions/courseActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";


const Search = ({token}) => {

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    //
  };

    return (
      <>
        <Form onSubmit={handleSubmit(onSubmit)} inline>
          <FormControl type="text" name="keyword" ref={register} placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </>
    );
}

export default Search
