import { useSetApplicationAdapter, useSetStocks, useGetStocks } from "ui/hooks";
import Dropdown from "ui/components/dropdown";
import { useMemo } from "react";

const EXCHANGE = "US";
const STOCKS_MAX_NUM = 3;

const App = ({ applicationAdapter }) => {
  useSetApplicationAdapter(applicationAdapter);
  useSetStocks(EXCHANGE);
  const stocks = useGetStocks();
  const options = useMemo(
    () =>
      stocks.map(({ description: label, symbol: value }) => ({ label, value })),
    [stocks]
  );

  return (
    <>
      <Dropdown
        options={options}
        isMulti
        placeholder="Select stock"
        maxNumOfOptionsSelected={STOCKS_MAX_NUM}
      />
    </>
  );
};

export default App;
