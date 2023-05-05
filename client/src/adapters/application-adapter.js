import { ApplicationPort } from "ports";
import { Stock } from "domain/entities/stock";

export const ApplicationAdapter = (repositoryAdapter) => {
  const getStocks = async (exchange) => {
    const stocks_ = await repositoryAdapter.getStocks(exchange);
    console.log("stocks_", stocks_);
    const stocks = stocks_.map((s) => Stock(s));
    return stocks.slice(0, 10);
  };
  const applicationAdapter = ApplicationPort({ getStocks });
  return applicationAdapter;
};
