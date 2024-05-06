import React from "react";
import { Button } from "react-bootstrap";

const EmailSequenceHeader = () => {
  return (
    <div className="d-flex">
      <h3>Email Sequences</h3>
      <Button className="ms-auto">Create Sequence</Button>
    </div>
  );
};

export default EmailSequenceHeader;
