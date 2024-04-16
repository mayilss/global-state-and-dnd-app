import { colors } from "@constants";
import { useRemoveDroppedItem } from "@hooks";
import { Button, Flex, Typography } from "antd";
import { GripVertical, PencilLine, Trash2 } from "lucide-react";
import styles from "./smileyRatingHeader.styles";

export default function SmileyRatingHeader() {
  const onRemove = useRemoveDroppedItem();
  return (
    <Flex justify="space-between" style={styles.wrapper}>
      <Flex align="center" gap={4}>
        <Typography.Text>Smiley field (Example)</Typography.Text>
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
}
