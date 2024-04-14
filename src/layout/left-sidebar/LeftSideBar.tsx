import Fieldset from "@components/fieldset/Fieldset";
import { Flex, Typography } from "antd";
import { X } from "lucide-react";

export default function LeftSideBar() {
  return (
    <Flex
      vertical
      gap={16}
      style={{
        padding: "8px 16px 0 16px",
        backgroundColor: "#fff",
        borderRight: "1px solid #f3f3f3",
      }}
    >
      <Flex justify="space-between">
        <Typography.Text>Feedback template</Typography.Text>
        <X width={20} />
      </Flex>
      <Fieldset legend="Question Type">
        <div></div>
      </Fieldset>
    </Flex>
  );
}
