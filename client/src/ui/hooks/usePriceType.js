import { useValues, useActions, priceType as priceTypeSlice } from "ui/slices";

export const usePriceType = () => {
  const { value: priceTypeValue } = useValues(priceTypeSlice);
  const {
    [priceTypeSlice]: { set: setPriceTypeValue },
  } = useActions();
  return [priceTypeValue, setPriceTypeValue];
};
