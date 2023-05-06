import { useValues, useActions, fromSlice } from "ui/slices";

export const useFrom = () => {
  const { value: fromValue } = useValues(fromSlice);
  const {
    [fromSlice]: { set: setFromValue },
  } = useActions();
  return [fromValue, setFromValue];
};
