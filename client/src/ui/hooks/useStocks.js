import { useSlice } from "ui/slices";
import { useSetStocks } from "./useSetStocks";

export const useStocks = (exchange) => {
  useSetStocks(exchange);
  return useSlice("stocks")[0];
};
