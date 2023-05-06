import { useCandles } from "ui/hooks";
import { LineChart, Line, XAxis, YAxis } from "recharts";
import { getChartDataFromCandles } from "ui/utils";
import { Y_AXIS_DATA_KEY } from "ui/constants_";

const Chart = ({ type, from, to, resolution }) => {
  const candles = useCandles({ from, to, resolution });
  const data = getChartDataFromCandles({ from, to, candles, type });

  return (
    <>
      <LineChart data={data} width={600} height={300}>
        {candles.map(({ id }) => (
          <Line key={id} dataKey={`${id}`} />
        ))}
        <XAxis dataKey={Y_AXIS_DATA_KEY} />
        <YAxis />
      </LineChart>
    </>
  );
};

export default Chart;
