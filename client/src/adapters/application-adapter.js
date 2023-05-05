import { ApplicationPort } from "ports";
import { Stock } from "domain/entities/stock";

export const ApplicationAdapter = (repositoryAdapter) => {
  const getStocks = async (exchange) => {
    const stocks_ = await repositoryAdapter.getStocks(exchange);
    const stocks = stocks_.map((s) => Stock(s));
    return stocks;
  };
  const applicationAdapter = ApplicationPort({ getStocks });
  return applicationAdapter;
};
