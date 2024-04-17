import { colors } from "@constants";
import { useRemoveDroppedItem } from "@hooks";
import { Button, Flex, Typography } from "antd";
import { GripVertical, PencilLine, Trash2 } from "lucide-react";
import React from "react";
import styles from "./droppedQuestionHeader.styles";

type DroppedQuestionProps = {
  label: string;
};

const DroppedQuestionHeader = React.memo(({ label }: DroppedQuestionProps) => {
  const onRemove = useRemoveDroppedItem();

  return (
    <Flex justify="space-between" style={styles.wrapper}>
      <Flex align="center" gap={4}>
        <Typography.Text>{label} </Typography.Text>
        <PencilLine color="blue" width={16} />
      </Flex>
      <Flex>
        <Button type="link" style={styles.button} onClick={onRemove}>
          <Trash2 width={16} color={colors.grey} />
        </Button>
        <Button type="link" style={styles.button}>
          <GripVertical width={16} color={colors.grey} />
        </Button>
      </Flex>
    </Flex>
  );
});

export default DroppedQuestionHeader;
