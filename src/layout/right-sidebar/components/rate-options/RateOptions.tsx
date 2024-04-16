import Fieldset from "@components/fieldset/Fieldset";
import { Flex } from "antd";
import ChooseSmileyDisplayCount from "./components/ChooseSmileyDisplayCount";
import ShowRateLabel from "./components/ShowRateLabel";

export default function RateOptions() {
  return (
    <Fieldset legend="Rate options">
      <Flex vertical gap={16}>
        <ChooseSmileyDisplayCount />
        <ShowRateLabel />
      </Flex>
    </Fieldset>
  );
}
