import { Store } from "@libs/global-state";
import React from "react";

export function useGlobalState<T>(
  store: Store<T>,
  key: keyof T
): [T[keyof T], (value: T[keyof T]) => void] {
  const [globalState, setGlobalState] = React.useState(store.getState());

  React.useEffect(() => {
    store.subscribe(setGlobalState);
    return () => store.unsubscribe(setGlobalState);
  }, [store]);

  const setState = React.useCallback(
    (value: T[keyof T]) => {
      store.setState({ ...globalState, [key]: value });
    },
    [store, key, globalState]
  );

  return [globalState[key], setState];
}
