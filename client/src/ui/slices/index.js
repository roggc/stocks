import { composeProviders } from "react-context-slices";
import {
  useValues as useApplicationAdapterValues,
  useActions as useApplicationAdapterActions,
  Provider as ApplicationAdapterProvider,
} from "./application-adapter";

export { name as applicationAdapter } from "./application-adapter";
export const useValues = (slice) => ({
  ...useApplicationAdapterValues(slice),
});
export const useActions = () => ({
  ...useApplicationAdapterActions(),
});
export default composeProviders([ApplicationAdapterProvider]);
