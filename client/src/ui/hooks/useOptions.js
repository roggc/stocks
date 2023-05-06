import { useMemo } from "react";

export const useOptions = (stocks) => {
  const options = useMemo(
    () =>
      stocks.map(({ description: label, symbol: value }) => ({ label, value })),
    [stocks]
  );
  return options;
};
