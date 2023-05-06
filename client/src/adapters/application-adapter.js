import { ApplicationPort } from "ports";
import { Stock, Candle } from "domain/entities";

export const ApplicationAdapter = (repositoryAdapter) => {
  const getStocks = async (exchange) => {
    const stocks_ = await repositoryAdapter.getStocks(exchange);
    const stocks = stocks_.map((s) => Stock(s));
    return stocks;
  };
  const getCandle = async (parameters) => {
    const candle_ = await repositoryAdapter.getCandle(parameters);
    const candle = Candle(candle_);
    return candle;
  };
  const applicationAdapter = ApplicationPort({ getStocks, getCandle });
  return applicationAdapter;
};
