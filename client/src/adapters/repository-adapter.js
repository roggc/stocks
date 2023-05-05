import { RepositoryPort } from "ports";
import { BASE_PATH } from "api-config";

export const RepositoryAdapter = () => {
  const getStocks = async (exchange) => {
    const resp = await fetch(
      `${BASE_PATH}?route=/stock/symbol&exchange=${exchange}`
    );
    const data = await resp.json();
    return data;
  };
  const repositoryAdapter = RepositoryPort({ getStocks });
  return repositoryAdapter;
};
