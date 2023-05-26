import { useSlice } from "ui/slices";
import { useEffect } from "react";

export const useSetApplicationAdapter = (applicationAdapter) => {
  const [, setApplicationAdapter] = useSlice("applicationAdapter");

  useEffect(() => {
    setApplicationAdapter(applicationAdapter);
  }, [applicationAdapter, setApplicationAdapter]);
};
