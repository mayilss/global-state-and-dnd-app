import DroppableArea from "@components/droppable-area/DroppableArea";
import { Flex } from "antd";

export default function Widget() {
  return (
    <Flex justify="center" style={{ padding: 24 }}>
      <Flex
        vertical
        align="center"
        style={{
          border: "16px solid #000",
          borderRadius: 12,
          width: "75%",
          height: "85vh",
          padding: 20,
        }}
      >
        <DroppableArea />
      </Flex>
    </Flex>
  );
}
