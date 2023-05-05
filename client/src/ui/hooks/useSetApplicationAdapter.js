import {
  useActions,
  applicationAdapter as applicationAdapterSlice,
} from "ui/slices";
import { useEffect } from "react";

export const useSetApplicationAdapter = (applicationAdapter) => {
  const {
    [applicationAdapterSlice]: { set: setApplicationAdapterValue },
  } = useActions();

  useEffect(() => {
    setApplicationAdapterValue(applicationAdapter);
  }, [applicationAdapter, setApplicationAdapterValue]);
};
