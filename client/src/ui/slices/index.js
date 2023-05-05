import { composeProviders } from "react-context-slices";
import {
  useValues as useApplicationAdapterValues,
  useActions as useApplicationAdapterActions,
  Provider as ApplicationAdapterProvider,
} from "./application-adapter";
import {
  useValues as useStocksValues,
  useActions as useStocksActions,
  Provider as StocksProvider,
} from "./stocks";

export { name as applicationAdapter } from "./application-adapter";
export { name as stocks } from "./stocks";

export const useValues = (slice) => ({
  ...useApplicationAdapterValues(slice),
  ...useStocksValues(slice),
});

export const useActions = () => ({
  ...useApplicationAdapterActions(),
  ...useStocksActions(),
});

export default composeProviders([ApplicationAdapterProvider, StocksProvider]);
