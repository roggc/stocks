import { useValues, useActions, selectedOptions } from "ui/slices";

export const useSelectedOptions = () => {
  const { value: selectedOptionsValue } = useValues(selectedOptions);
  const {
    [selectedOptions]: { set: setSelectedOptionsValue },
  } = useActions();
  return [selectedOptionsValue, setSelectedOptionsValue];
};
