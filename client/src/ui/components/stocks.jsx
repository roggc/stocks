import { useValues, applicationAdapter } from "ui/slices";
import { useState, useEffect } from "react";

const Stocks = () => {
  const [stocks, setStocks] = useState([]);
  const {
    value: { getStocks },
  } = useValues(applicationAdapter);
  useEffect(() => {
    const exchange = "US";
    const fetchStocks = async (exchange) => {
      setStocks((await getStocks?.(exchange)) ?? []);
    };
    fetchStocks(exchange);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getStocks]);
  console.log("stocks", stocks);
  return (
    <>
      {stocks.map(({ id, symbol }) => (
        <div key={id}>{symbol}</div>
      ))}
    </>
  );
};

export default Stocks;
