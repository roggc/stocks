import { useSetApplicationAdapter, useStocks, useOptions } from "ui/hooks";
import "rsuite/dist/rsuite.min.css";
import StockControl from "ui/components/stock-control";

const EXCHANGE = "US";
const STOCKS_MAX_NUM = 3;

const App = ({ applicationAdapter }) => {
  useSetApplicationAdapter(applicationAdapter);
  const stocks = useStocks(EXCHANGE);
  const options = useOptions(stocks);

  return (
    <>
      <StockControl options={options} maxNumberOfStocks={STOCKS_MAX_NUM} />
    </>
  );
};

export default App;
