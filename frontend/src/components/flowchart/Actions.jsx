import React from "react";
import { Button } from "react-bootstrap";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { Position, useEdges, useNodes } from "reactflow";
import { updateEmailSequence } from "../../services/emailSequenceService";

const Actions = () => {
  const edges = useEdges();
  const nodes = useNodes();
  const { emailSequenceId } = useParams();

  const handleSave = () => {
    // console.log(edges);
    // console.log(nodes);

    const nodesData = nodes.map((node) => ({
      id: node.id,
      type: node.data.type,
      parameters: node.data.parameters,
      position: node.position,
    }));

    const edgesData = edges
      .filter((edge) => edge.source && edge.target)
      .map((edge) => ({
        id: edge.id,
        source: edge.source,
        target: edge.target,
      }));

    console.log(edgesData);

    toast.promise(
      updateEmailSequence(
        { nodes: nodesData, edges: edgesData },
        emailSequenceId
      ),
      {
        loading: "saving...",
        success: "saved",
        error: (e) => e,
      }
    );
  };
  return (
    <div className="position-absolute" style={{ top: "15%", left: "50px" }}>
      <Button variant="success" onClick={handleSave}>
        Save
      </Button>
    </div>
  );
};

export default Actions;
