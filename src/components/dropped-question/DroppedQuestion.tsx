import { Button, Flex } from "antd";
import DroppedQuestionHeader from "./dropped-question-header/DroppedQuestionHeader";
import styles from "./droppedQuestion.styles";

type DroppedQuestionProps = {
  children: JSX.Element;
  onSubmit: () => void;
  label: string;
};

export default function DroppedQuestion({
  children,
  onSubmit,
  label,
}: DroppedQuestionProps) {
  return (
    <Flex vertical gap={16} style={styles.wrapper}>
      <DroppedQuestionHeader label={label} />
      {children}
      <Button type="primary" style={styles.submit} onClick={onSubmit}>
        Submit
      </Button>
    </Flex>
  );
}
