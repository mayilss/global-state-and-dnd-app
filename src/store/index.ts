import { createStore } from "@libs/global-state";

const initialState = { count: 0, anotherCounter: 5 };

const globalStore = createStore(initialState);

export default globalStore;
