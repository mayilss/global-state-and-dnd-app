type Listener<T> = (state: T) => void;

export class Store<T> {
  private listeners: Array<Listener<T>> = [];
  private state: T;

  constructor(initialState: T) {
    this.state = initialState;
  }

  subscribe(listener: Listener<T>) {
    this.listeners.push(listener);
  }

  unsubscribe(listener: Listener<T>) {
    this.listeners = this.listeners.filter((l) => l !== listener);
  }

  setState(state: T) {
    this.state = state;
    this.listeners.forEach((listener) => listener(this.state));
  }

  getState() {
    return this.state;
  }
}

export const createStore = <T>(initialState: T) => {
  const store = new Store<T>(initialState);
  return store;
};
