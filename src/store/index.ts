import { createStore } from "@libs/global-state";

interface GlobalState {
  droppedItemId: string | null;
  smileDisplayCount: number;
  showSmileLabels: boolean;
  selectedRateId: string | null;
}

const initialState: GlobalState = {
  droppedItemId: null,
  smileDisplayCount: 5,
  showSmileLabels: true,
  selectedRateId: null,
};

const globalStore = createStore(initialState);

export default globalStore;
