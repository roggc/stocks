import { useCandles, usePriceType } from "ui/hooks";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import { getChartDataFromCandles, formatTimestamp } from "ui/utils";
import { Y_AXIS_DATA_KEY, RESOLUTION } from "ui/constants_";

const Chart = ({ ...props }) => {
  const [type] = usePriceType();
  const candles = useCandles(RESOLUTION);
  const data = getChartDataFromCandles({ candles, type });

  return (
    <>
      <LineChart data={data} width={600} height={300} {...props}>
        {candles.map(({ id, symbol }) => (
          <Line key={id} dataKey={`${symbol}`} dot={false} />
        ))}
        <XAxis
          dataKey={Y_AXIS_DATA_KEY}
          tickFormatter={formatTimestamp}
          interval="preserveStartEnd"
        />
        <YAxis />
        <Tooltip
          itemSorter={({ value }) => value * -1}
          labelFormatter={formatTimestamp}
        />
      </LineChart>
    </>
  );
};

export default Chart;
