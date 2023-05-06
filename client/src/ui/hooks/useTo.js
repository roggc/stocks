import { useValues, useActions, toSlice } from "ui/slices";

export const useTo = () => {
  const { value: toValue } = useValues(toSlice);
  const {
    [toSlice]: { set: setToValue },
  } = useActions();
  return [toValue, setToValue];
};
