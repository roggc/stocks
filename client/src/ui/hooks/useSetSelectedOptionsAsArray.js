import { useSelectedOptions } from "./useSelectedOptions";
import { useEffect } from "react";

export const useSetSelectedOptionsAsArray = (values) => {
  const [, setSelectedOptions] = useSelectedOptions();
  useEffect(() => {
    const getValuesAsArray = () => {
      const values_ = [];
      for (const value of Object.values(values)) {
        if (!!value) {
          values_.push(value);
        }
      }
      return values_;
    };
    setSelectedOptions(getValuesAsArray());
  }, [values, setSelectedOptions]);
};
