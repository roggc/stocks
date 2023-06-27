import getHookAndProviderFromSlices from "react-context-slices";
import { MIN } from "ui/constants_/slider";
import { MAX } from "ui/constants_/slider";

export const { useSlice, Provider } = getHookAndProviderFromSlices({
  slices: {
    applicationAdapter: { initialArg: {} },
    from: { initialArg: MIN },
    priceType: { initialArg: "o" },
    selectedOptions: { initialArg: [] },
    stocks: { initialArg: [] },
    to: { initialArg: MAX },
  },
});
