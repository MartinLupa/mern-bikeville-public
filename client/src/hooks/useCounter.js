import { useState } from "react";

export function useCounter(initialState = 1) {
  const [state, setState] = useState(initialState);

  const increment = () => {
    setState(state + 1);
  };
  const decrement = () => {
    setState(state - 1);
  };

  return { state, increment, decrement };
}
