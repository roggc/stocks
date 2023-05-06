import { useCandles, usePriceType } from "ui/hooks";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import { getChartDataFromCandles, formatTimestamp } from "ui/utils";
import { Y_AXIS_DATA_KEY, RESOLUTION } from "ui/constants_";
import styled from "styled-components";

const Chart = ({ ...props }) => {
  const [type] = usePriceType();
  const candles = useCandles(RESOLUTION);
  const data = getChartDataFromCandles({ candles, type });

  return (
    <ChartContainer {...props}>
      <LineChart data={data} width={600} height={300}>
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
    </ChartContainer>
  );
};

const ChartContainer = styled.div`
  border: 1px solid grey;
  border-radius: 10px;
  width: fit-content;
  padding: 40px;
`;

export default Chart;
