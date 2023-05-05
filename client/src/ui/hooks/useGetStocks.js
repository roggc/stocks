import { useValues, stocks } from "ui/slices";

export const useGetStocks = () => {
  const { value: stocksValue } = useValues(stocks);
  return stocksValue;
};
