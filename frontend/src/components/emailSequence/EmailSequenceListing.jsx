import React from "react";

import useFetch from "@hooks/useFetch";
import { getAllEmailSequence } from "../../services/emailSequenceService";
import EmailLoader from "./EmailLoader";
import InnerWrapper from "@components/ui/InnerWrapper";
import EmailSequenceItem from "./EmailSequenceItem";

const EmailSequenceListing = () => {
  const { data, isLoading } = useFetch(getAllEmailSequence);

  if (isLoading) {
    return <EmailLoader />;
  }

  if (data.length === 0 && !isLoading) {
    return (
      <InnerWrapper>
        <p className="text-center">No Email Sequence found , create new one</p>
      </InnerWrapper>
    );
  }

  return (
    <InnerWrapper>
      {data.map((emailSequence) => (
        <EmailSequenceItem {...emailSequence} />
      ))}
    </InnerWrapper>
  );
};

export default EmailSequenceListing;
