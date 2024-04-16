import Fieldset from "@components/fieldset/Fieldset";
import { Col, Flex, Typography } from "antd";
import { X } from "lucide-react";
import { questionTypes } from "@constants";
import DraggableItem from "@components/draggable-item/DraggableItem";
import styles from "./leftSideBar.styles";

export default function LeftSideBar() {
  return (
    <Flex vertical gap={16} style={styles.wrapper}>
      <Flex justify="space-between">
        <Typography.Text>Feedback template</Typography.Text>
        <X width={20} />
      </Flex>
      <Fieldset legend="Question Type">
        <Flex wrap="wrap">
          {questionTypes.map((qt) => (
            <Col key={qt.id} span={8} style={styles.fieldsetItem}>
              <DraggableItem
                icon={qt.icon}
                label={qt.label}
                key={qt.id}
                id={qt.id}
              />
            </Col>
          ))}
        </Flex>
      </Fieldset>
    </Flex>
  );
}
