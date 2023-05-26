import getHookAndProviderFromSlices from "react-context-slices";
import { MIN } from "ui/constants_/slider";
import { MAX } from "ui/constants_/slider";

export const { useSlice, Provider } = getHookAndProviderFromSlices({
  applicationAdapter: {},
  from: MIN,
  priceType: "o",
  selectedOptions: [],
  stocks: [],
  to: MAX,
});
