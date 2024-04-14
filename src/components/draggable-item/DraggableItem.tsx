import { useDraggable } from "@dnd-kit/core";
import { Flex, Typography } from "antd";
import { GripHorizontal } from "lucide-react";
import React from "react";
import { CSS } from "@dnd-kit/utilities";
import styles from "./draggableItem.styles";

type DraggableItemProps = {
  icon: React.ReactNode;
  label: string;
  id: string;
};

export default function DraggableItem({ icon, label, id }: DraggableItemProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });

  const draggableStyle = {
    transform: CSS.Translate.toString(transform),
  };
  return (
    <Flex
      {...listeners}
      {...attributes}
      ref={setNodeRef}
      vertical
      align="center"
      gap={4}
      style={{
        ...draggableStyle,
        ...styles.wrapper,
      }}
    >
      {icon}
      <Typography.Text style={styles.label}>{label}</Typography.Text>
      <GripHorizontal color="#c3c3c3" width={20} />
    </Flex>
  );
}
