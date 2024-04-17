import { useGlobalState } from "@libs/global-state";
import globalStore from "@store";
import { Flex } from "antd";
import SmileyItem from "./components/smiley-item/SmileyItem";
import { useGetSmileys } from "./hooks";
import styles from "./smileyRating.styles";

export default function SmileyRating() {
  const [smileDisplayCount] = useGlobalState(globalStore, "smileDisplayCount");

  const smileys = useGetSmileys(smileDisplayCount as number);

  return (
    <Flex style={styles.wrapper} justify="space-around">
      {smileys.map((s) => (
        <SmileyItem key={s.id} smiley={s} />
      ))}
    </Flex>
  );
}
