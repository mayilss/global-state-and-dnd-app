import { colors } from "@constants";
import { useGlobalState } from "@libs/global-state";
import globalStore from "@store";
import { Radio, RadioChangeEvent } from "antd";
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
      <Radio style={{ width: "100%" }} value={5}>
        <Laugh color={colors.grey} />
        <Smile color={colors.grey} />
        <Meh color={colors.grey} />
        <Frown color={colors.grey} />
        <Angry color={colors.grey} />
      </Radio>
      <Radio style={{ width: "100%" }} value={4}>
        <Laugh color={colors.grey} />
        <Smile color={colors.grey} />
        <Frown color={colors.grey} />
        <Angry color={colors.grey} />
      </Radio>
      <Radio style={{ width: "100%" }} value={3}>
        <Laugh color={colors.grey} />
        <Meh color={colors.grey} />
        <Angry color={colors.grey} />
      </Radio>
      <Radio style={{ width: "100%" }} value={2}>
        <Laugh color={colors.grey} />
        <Angry color={colors.grey} />
      </Radio>
    </Radio.Group>
  );
}
