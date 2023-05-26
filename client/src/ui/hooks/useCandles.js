import { useEffect, useState } from "react";
import { useSlice } from "ui/slices";

export const useCandles = (resolution) => {
  const [selectedOptions] = useSlice("selectedOptions");
  const [{ getCandle }] = useSlice("applicationAdapter");
  const [from] = useSlice("from");
  const [to] = useSlice("to");
  const [candles, setCandles] = useState([]);

  useEffect(() => {
    const candles_ = [];
    const fetchCandle = async (parameters) => {
      const candle = await getCandle?.(parameters);
      return candle;
    };
    (async () => {
      for await (const symbol of selectedOptions) {
        const candle = await fetchCandle({ symbol, resolution, from, to });
        candles_.push({ ...candle, symbol });
      }
      setCandles(candles_);
    })();
  }, [selectedOptions, from, to, resolution, getCandle]);

  return candles;
};
