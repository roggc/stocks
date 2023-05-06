import { useGetStocks } from "./useGetStocks";
import { useSetStocks } from "./useSetStocks";

export const useStocks = (exchange) => {
  useSetStocks(exchange);
  return useGetStocks();
};
