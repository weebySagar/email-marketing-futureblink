import React from "react";
import { useReactFlow } from "reactflow";
import { Position } from "reactflow";

const NodeMenu = () => {
  const data = [
    {
      title: "Send Mail",
      className: "send-mail-node",
      icon: "fa-regular fa-envelope fa-lg",
      placeholder: "Template",
      nodeType: [{ position: Position.Bottom, type: "source" }],
    },
    {
      title: "Wait",
      icon: "fa-regular fa-clock fa-lg",
      className: "wait-node",
      placeholder: "Duration",
      nodeType: [
        { position: Position.Top, type: "target" },
        { position: Position.Bottom, type: "source" },
      ],
    },
    {
      title: "Decision",
      icon: "fa-solid fa-hourglass-end fa-lg",
      className: "decision-node",
      nodeType: [{ position: Position.Top, type: "target" }],
    },
  ];

  const { addNodes, getNodes } = useReactFlow();

  const handleChange = (e) => {
    const location = Math.random() * 100;
    const nodeData = data[e.target.value];

    const newNode = {
      id: String(getNodes().length + 1),
      data: {
        title: nodeData.title,
        icon: nodeData.icon,
        className: nodeData.className,
        placeholder: nodeData.placeholder,
        nodeType: nodeData.nodeType,
      },
      position: { x: location, y: location },
      type: "customNode",
      height: 40,
      width: 150,
    };

    addNodes(newNode);
  };
  return (
    <select
      className="form-select"
      aria-label="Default select example"
      onChange={handleChange}
    >
      <option defaultValue={""}>Create Node</option>
      {data.map((optionData, index) => (
        <option value={index} key={index}>
          {optionData.title}
        </option>
      ))}
    </select>
  );
};

export default NodeMenu;
