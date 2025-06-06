import { useState } from "react";

import "@xyflow/react/dist/style.css";
import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  Controls,
  ReactFlow,
  type NodeTypes,
  type OnConnect,
  type OnNodesChange,
  type OnEdgesChange,
  type Edge,
  type Node,
} from "@xyflow/react";

import { DraggableCard } from "./DraggableCard";

const nodeTypes: NodeTypes = { textUpdater: DraggableCard };

export const Canvas = () => {
  const [nodes, setNodes] = useState<Node[]>([
    {
      id: "1",
      position: { x: 10, y: 10 },
      data: { label: "Hello" },
      type: "textUpdater",
    },
    {
      id: "2",
      position: { x: 300, y: 300 },
      data: { label: "Hello" },
      type: "textUpdater",
    },
  ]);

  const [edges, setEdges] = useState<Edge[]>([]);

  const onEdgesChange: OnEdgesChange = (changes) =>
    setEdges((eds) => applyEdgeChanges(changes, eds));

  const onConnect: OnConnect = (connection) => setEdges((eds) => addEdge(connection, eds));

  const onNodesChange: OnNodesChange = (changes) =>
    setNodes((nds) => applyNodeChanges(changes, nds));

  return (
    <div style={{height: '100vh'}}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};
