import { Y_AXIS_DATA_KEY } from "ui/constants_";

export const getChartDataFromCandles = ({ from, to, candles, type }) => {
  const step = (to - from) / candles.length;
  const data = candles.reduce(
    (d, c, i) => {
      c[type].forEach((price) => {
        d[i] = { ...d[i], [`${c.id}`]: price };
      });
      return d;
    },
    candles[0][type].map((p, index) => ({
      [Y_AXIS_DATA_KEY]: from + step * index,
    }))
  );
  return data;
};
