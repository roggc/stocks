import { RepositoryPort } from "ports";
import { BASE_PATH } from "adapters/constants_/api-config";

export const RepositoryAdapter = () => {
  const getStocks = async (exchange) => {
    const fetchPath = `${BASE_PATH}?route=/stock/symbol&exchange=${exchange}`;
    const resp = await fetch(fetchPath);
    const data = await resp.json();
    return data;
  };
  const getCandle = async ({ symbol, resolution, from, to }) => {
    const fetchPath = `${BASE_PATH}?route=/stock/candle&symbol=${symbol}&resolution=${resolution}&from=${from}&to=${to}`;
    const resp = await fetch(fetchPath);
    const data = await resp.json();
    return data;
  };
  const repositoryAdapter = RepositoryPort({ getStocks, getCandle });
  return repositoryAdapter;
};
