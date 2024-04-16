import { useGlobalState } from "@libs/global-state";
import globalStore from "@store";

export const useRemoveDroppedItem = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_droppedItemId, setDroppedItemId] = useGlobalState(
    globalStore,
    "droppedItemId"
  );

  const onRemove = () => setDroppedItemId(null);

  return onRemove;
};
