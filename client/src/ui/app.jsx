import {
  useSetApplicationAdapter,
  useSetStocks,
  useGetStocks,
  useSelectedOptions,
} from "ui/hooks";
import Dropdown from "ui/components/dropdown/dropdown";
import { useMemo } from "react";

const EXCHANGE = "US";
const STOCKS_MAX_NUM = 3;

const App = ({ applicationAdapter }) => {
  useSetApplicationAdapter(applicationAdapter);
  useSetStocks(EXCHANGE);
  const [selectedOptions, setSelectedOptions] = useSelectedOptions();
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
        setSelectedOptions={setSelectedOptions}
        selectedOptions={selectedOptions}
      />
    </>
  );
};

export default App;
