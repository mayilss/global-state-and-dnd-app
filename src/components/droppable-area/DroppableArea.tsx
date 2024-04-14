import { useDroppable } from "@dnd-kit/core";
import { Flex } from "antd";

export default function DroppableArea() {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });
  const style = {
    color: isOver ? "green" : undefined,
  };
  return (
    <Flex
      ref={setNodeRef}
      style={{
        width: "100%",
        border: "1px dashed #c3c3c3",
        height: 100,
        ...style,
      }}
    >
      DroppableArea
    </Flex>
  );
}
