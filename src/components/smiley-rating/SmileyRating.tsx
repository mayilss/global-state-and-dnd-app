import { useGlobalState } from "@libs/global-state";
import globalStore from "@store";
import { Button, Flex } from "antd";
import SmileyItem from "./components/smiley-item/SmileyItem";
import SmileyRatingHeader from "./components/smiley-rating-header/SmileyRatingHeader";
import { smileys } from "./constants";
import { useGetSmileys } from "./hooks";
import styles from "./smileyRating.styles";

export default function SmileyRating() {
  const [smileDisplayCount] = useGlobalState(globalStore, "smileDisplayCount");
  const [selectedRateId] = useGlobalState(globalStore, "selectedRateId");

  const getSmileys = useGetSmileys(smileys, smileDisplayCount as number);

  const onSubmit = () => {
    console.log(selectedRateId);
  };

  return (
    <Flex vertical gap={16} style={styles.wrapper}>
      <SmileyRatingHeader />
      <Flex style={styles.smileysWrapper} justify="space-around">
        {getSmileys().map((s) => (
          <SmileyItem key={s.id} smiley={s} />
        ))}
      </Flex>
      <Button type="primary" style={styles.submit} onClick={onSubmit}>
        Submit
      </Button>
    </Flex>
  );
}
