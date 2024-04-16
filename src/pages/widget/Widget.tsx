import { useGlobalState } from "@libs/global-state";
import globalStore from "@store";
import { Flex } from "antd";
import styles from "./widget.styles";
import { getWidgetContent } from "./helpers";

export default function Widget() {
  const [droppedItemId] = useGlobalState(globalStore, "droppedItemId");

  return (
    <Flex vertical align="center" style={styles.wrapper}>
      <Flex vertical align="center" style={styles.widget}>
        {getWidgetContent(droppedItemId as string)}
      </Flex>
    </Flex>
  );
}
