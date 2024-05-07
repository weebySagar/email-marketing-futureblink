import React, { useCallback, useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  applyNodeChanges,
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  addEdge,
} from "reactflow";
import "reactflow/dist/style.css";

import NodeMenu from "./NodeMenu";
import CustomNode from "./CustomNode";

const nodeTypes = {
  customNode: CustomNode,
};

const FlowChart = () => {
  const initialNodes = [
    {
      id: "1",
      position: { x: 0, y: 0 },
      data: {
        label: "Node 1",
      },
    },
    {
      id: "2",
      position: { x: 100, y: 0 },
      data: {
        label: "Node 2",
      },
    },
  ];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect = useCallback(
    (connection) => {
      const edge = {
        ...connection,
        animated: true,
        id: `${edges.length++}`,
      };
      setEdges((prevEdges) => addEdge(edge, prevEdges));
    },
    [edges]
  );

  return (
    <div
      style={{
        height: "calc(100vh - 60px)",
        position: "relative",
      }}
    >
      <ReactFlowProvider>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}
          onConnect={onConnect}
        >
          <Background />
          <Controls />
        </ReactFlow>
        <div style={{ position: "absolute", right: "10px", top: "10%" }}>
          <NodeMenu />
        </div>
      </ReactFlowProvider>
    </div>
  );
};

export default FlowChart;
