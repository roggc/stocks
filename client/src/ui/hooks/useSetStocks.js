import { useSlice } from "ui/slices";
import { useEffect } from "react";

export const useSetStocks = (exchange) => {
  const [, setStocks] = useSlice("stocks");
  const [{ getStocks }] = useSlice("applicationAdapter");

  useEffect(() => {
    const fetchStocks = async (exchange) => {
      setStocks((await getStocks?.(exchange)) ?? []);
    };
    fetchStocks(exchange);
  }, [getStocks, setStocks, exchange]);
};
