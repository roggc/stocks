import { useActions, useValues, stocks, applicationAdapter } from "ui/slices";
import { useEffect } from "react";

export const useSetStocks = (exchange) => {
  const {
    [stocks]: { set: setStocksValue },
  } = useActions();
  const {
    value: { getStocks },
  } = useValues(applicationAdapter);

  useEffect(() => {
    const fetchStocks = async (exchange) => {
      setStocksValue((await getStocks?.(exchange)) ?? []);
    };
    fetchStocks(exchange);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getStocks]);
};
