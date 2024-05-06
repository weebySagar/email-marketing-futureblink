import EmailSequence from "@pages/EmailSequence";
import EmailSequenceDetail from "@pages/EmailSequenceDetail";
import Login from "@pages/Login";
import Register from "@pages/Register";
import React from "react";
import { Routes, Route } from "react-router-dom";

const Routers = () => {
  // defining routes
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/emailsequences" element={<EmailSequence />} />
        <Route
          path="/emailsequences/:emailSequenceId"
          element={<EmailSequenceDetail />}
        />
      </Routes>
    </>
  );
};

export default Routers;
