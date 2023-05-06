import {
  useSelectedOptions,
  useGetApplicationAdapter,
  useFrom,
  useTo,
} from "ui/hooks";
import { useEffect, useState } from "react";

export const useCandles = (resolution) => {
  const [selectedOptions] = useSelectedOptions();
  const { getCandle } = useGetApplicationAdapter();
  const [from] = useFrom();
  const [to] = useTo();
  const [candles, setCandles] = useState([]);

  useEffect(() => {
    const candles_ = [];
    const fetchCandle = async (parameters) => {
      const candle = await getCandle(parameters);
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
