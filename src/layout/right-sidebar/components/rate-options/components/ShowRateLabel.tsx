import { useGlobalState } from "@libs/global-state";
import globalStore from "@store";
import { Flex, Switch, Typography } from "antd";

export default function ShowRateLabel() {
  const [showSmileLabels, setShowSmileLabels] = useGlobalState(
    globalStore,
    "showSmileLabels"
  );

  const onShowLabelsChange = (checked: boolean) => {
    setShowSmileLabels(checked);
  };

  return (
    <Flex justify="space-between">
      <Typography.Text>Rate Labels</Typography.Text>
      <Switch
        value={showSmileLabels as boolean}
        onChange={onShowLabelsChange}
      />
    </Flex>
  );
}
