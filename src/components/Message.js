import React from 'react'
import {Alert} from 'react-bootstrap';


const Message = ({title, variant, msg}) => {
    return (
      <div className="d-flex justify-content-center">
        <Alert className="py-3 px-5" variant={variant}>
          <Alert.Heading>{title}</Alert.Heading>
          <p className="text-lead text-center">{msg}</p>
        </Alert>
      </div>
    );
}

export default Message
