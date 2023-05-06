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
import {
  useValues as usePriceTypeValues,
  useActions as usePriceTypeActions,
  Provider as PriceTypeProvider,
} from "./price-type";
import {
  useValues as useFromValues,
  useActions as useFromActions,
  Provider as FromProvider,
} from "./from";
import {
  useValues as useToValues,
  useActions as useToActions,
  Provider as ToProvider,
} from "./to";

export { name as applicationAdapter } from "./application-adapter";
export { name as stocks } from "./stocks";
export { name as selectedOptions } from "./selected-options";
export { name as priceType } from "./price-type";
export { name as fromSlice } from "./from";
export { name as toSlice } from "./to";

export const useValues = (slice) => ({
  ...useApplicationAdapterValues(slice),
  ...useStocksValues(slice),
  ...useSelectedOptionsValues(slice),
  ...usePriceTypeValues(slice),
  ...useFromValues(slice),
  ...useToValues(slice),
});

export const useActions = () => ({
  ...useApplicationAdapterActions(),
  ...useStocksActions(),
  ...useSelectedOptionsActions(),
  ...usePriceTypeActions(),
  ...useFromActions(),
  ...useToActions(),
});

export default composeProviders([
  ApplicationAdapterProvider,
  StocksProvider,
  SelectedOptionsProvider,
  PriceTypeProvider,
  FromProvider,
  ToProvider,
]);
