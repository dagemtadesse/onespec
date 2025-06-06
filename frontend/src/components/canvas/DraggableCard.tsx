import { Handle, Position } from "@xyflow/react";
import { Button } from "@/components/ui/button";

export const DraggableCard = () => {
  return (
    <div>
      <Handle type="target" position={Position.Top} />
      <Button>Click me</Button>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};
