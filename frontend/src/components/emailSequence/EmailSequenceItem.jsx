import React from "react";
import { Link } from "react-router-dom";

const EmailSequenceItem = ({ _id }) => {
  return <Link to={`/emailsequences/${_id}`}>EmailSequenceItem</Link>;
};

export default EmailSequenceItem;
