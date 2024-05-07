import React from "react";
import { Form } from "react-bootstrap";
import { Handle, Position, useEdges } from "reactflow";

import "@styles/node/_custom-node.scss";

const CustomNode = ({ data }) => {
  return (
    <div className={`custom-node shadow ${data.className}`}>
      {data.nodeType.map((nodeData, i) => (
        <Handle
          // id={useEdges().length + 1}
          key={i}
          type={nodeData.type}
          position={nodeData.position}
        />
      ))}
      <div className="d-flex gap-4">
        <div className="icon">
          <div className="icon-wrapper">
            <i className={data.icon}></i>
          </div>
        </div>
        <div className="text">
          <Form>
            <Form.Group className="mb-3" controlId="form">
              <Form.Label>{data.title}</Form.Label>
              <Form.Control type="text" placeholder={data.placeholder} />
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CustomNode;
