import { useGlobalState } from "@libs/global-state";
import globalStore from "@store";
import { Flex, Typography } from "antd";
import { X } from "lucide-react";
import RateOptions from "./components/rate-options/RateOptions";
import styles from "./rightSidebar.styles";

export default function RightSidebar() {
  const [droppedItemId] = useGlobalState(globalStore, "droppedItemId");
  return (
    <Flex vertical gap={16} style={styles.wrapper}>
      <Flex justify="space-between">
        <Typography.Text>Template Editor</Typography.Text>
        <X width={20} />
      </Flex>
      {droppedItemId === "smiley-rating" && <RateOptions />}
    </Flex>
  );
}
