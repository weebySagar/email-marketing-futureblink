import React from "react";
import { Link } from "react-router-dom";

const EmailSequenceItem = ({ _id, name }) => {
  return <Link to={`/emailsequences/${_id}`}>{name}</Link>;
};

export default EmailSequenceItem;
