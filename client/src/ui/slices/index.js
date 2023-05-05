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
import {
  useValues as useSelectedOptionsValues,
  useActions as useSelectedOptionsActions,
  Provider as SelectedOptionsProvider,
} from "./selected-options";

export { name as applicationAdapter } from "./application-adapter";
export { name as stocks } from "./stocks";
export { name as selectedOptions } from "./selected-options";

export const useValues = (slice) => ({
  ...useApplicationAdapterValues(slice),
  ...useStocksValues(slice),
  ...useSelectedOptionsValues(slice),
});

export const useActions = () => ({
  ...useApplicationAdapterActions(),
  ...useStocksActions(),
  ...useSelectedOptionsActions(),
});

export default composeProviders([
  ApplicationAdapterProvider,
  StocksProvider,
  SelectedOptionsProvider,
]);
