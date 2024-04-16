import { colors } from "@constants";
import { useGlobalState } from "@libs/global-state";
import { Smiley } from "@models";
import globalStore from "@store";
import { Button, Flex, Typography } from "antd";

type SmileyItemProps = {
  smiley: Smiley;
};

export default function SmileyItem({ smiley }: SmileyItemProps) {
  const [showSmileLabels] = useGlobalState(globalStore, "showSmileLabels");
  const [selectedRateId, setSelectedRateId] = useGlobalState(
    globalStore,
    "selectedRateId"
  );

  const onClick = (s: Smiley) => {
    setSelectedRateId(s.id);
  };
  return (
    <Button type="link" onClick={() => onClick(smiley)} key={smiley.id}>
      <Flex vertical align="center">
        {smiley.icon(selectedRateId as string)}
        {showSmileLabels && (
          <Typography.Text
            style={{
              color: selectedRateId === smiley.id ? colors.blue : colors.grey,
            }}
          >
            {smiley.label}
          </Typography.Text>
        )}
      </Flex>
    </Button>
  );
}
