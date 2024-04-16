import { colors } from "@constants";
import { useGlobalState } from "@libs/global-state";
import globalStore from "@store";
import { Radio, RadioChangeEvent, RadioProps } from "antd";
import { Angry, Frown, Laugh, Meh, Smile } from "lucide-react";

export default function ChooseSmileyDisplayCount() {
  const [smileDisplayCount, setSmileDisplayCount] = useGlobalState(
    globalStore,
    "smileDisplayCount"
  );

  const onDisplayCountChange = (e: RadioChangeEvent) => {
    setSmileDisplayCount(e.target.value);
  };

  return (
    <Radio.Group onChange={onDisplayCountChange} value={smileDisplayCount}>
      <RadioOption value={5} />
      <RadioOption value={4} />
      <RadioOption value={3} />
      <RadioOption value={2} />
    </Radio.Group>
  );
}

function RadioOption({ value, ...props }: RadioProps) {
  return (
    <Radio style={{ width: "100%" }} value={value} {...props}>
      <Laugh color={colors.grey} />
      {value !== 3 && value !== 2 && <Smile color={colors.grey} />}
      {value !== 4 && value !== 2 && <Meh color={colors.grey} />}
      {value !== 3 && value !== 2 && <Frown color={colors.grey} />}
      <Angry color={colors.grey} />
    </Radio>
  );
}
