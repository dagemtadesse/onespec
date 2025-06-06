import { Card, Button } from "@chakra-ui/react";
import { Handle, Position } from "@xyflow/react";

export const DraggableCard = () => {
  return (
    <Card.Root>
      <Handle type="target" position={Position.Top} />
      <Card.Header />
      <Card.Body>
        <Button> Node </Button>
      </Card.Body>
      <Card.Footer />
      <Handle type="source" position={Position.Bottom} />
    </Card.Root>
  );
};
