import { useDroppable } from "@dnd-kit/core";
import { Flex, Typography } from "antd";
import styles from "./droppableArea.styles";
import React from "react";

type DroppableAreaProps = { id: string };

const DroppableArea = React.memo(({ id }: DroppableAreaProps) => {
  const { setNodeRef } = useDroppable({ id });

  return (
    <Flex
      vertical
      justify="center"
      align="center"
      ref={setNodeRef}
      style={styles.wrapper}
    >
      <Typography.Text style={styles.text}>
        Drag and drop a question here
      </Typography.Text>
    </Flex>
  );
});

export default DroppableArea;
