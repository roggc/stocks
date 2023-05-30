import getHookAndProviderFromSlices from "react-context-slices";
import { MIN } from "ui/constants_/slider";
import { MAX } from "ui/constants_/slider";

export const { useSlice, Provider } = getHookAndProviderFromSlices({
  applicationAdapter: { initialState: {} },
  from: { initialState: MIN },
  priceType: { initialState: "o" },
  selectedOptions: { initialState: [] },
  stocks: { initialState: [] },
  to: { initialState: MAX },
});
