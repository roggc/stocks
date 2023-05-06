import { Y_AXIS_DATA_KEY } from "ui/constants_";

export const getChartDataFromCandles = ({ candles, type }) => {
  if (!candles.length) {
    return [];
  }
  const data = candles.reduce(
    (d, c) => {
      c[type]?.forEach((price, i) => {
        d[i] = { ...d[i], [`${c.symbol}`]: price };
      });
      return d;
    },
    candles
      .find((c) => c[Y_AXIS_DATA_KEY]?.length)
      ?.[Y_AXIS_DATA_KEY]?.map((v) => ({
        [Y_AXIS_DATA_KEY]: v,
      }))
  );
  return data;
};
