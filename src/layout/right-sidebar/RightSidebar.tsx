import { Flex, Typography } from "antd";
import { X } from "lucide-react";
import RateOptions from "./components/rate-options/RateOptions";
import { colors } from "@constants";

export default function RightSidebar() {
  return (
    <Flex
      vertical
      gap={16}
      style={{
        padding: "8px 16px 0 16px",
        backgroundColor: colors.white,
        height: "100%",
      }}
    >
      <Flex justify="space-between">
        <Typography.Text>Template Editor</Typography.Text>
        <X width={20} />
      </Flex>
      <RateOptions />
    </Flex>
  );
}
