import { useEffect } from "react";
import {
  applicationAdapter as applicationAdapterSlice,
  useActions,
} from "ui/slices";
import Stocks from "ui/components/stocks";

const App = ({ applicationAdapter }) => {
  const {
    [applicationAdapterSlice]: { set: setApplicationAdapterValue },
  } = useActions();
  useEffect(() => {
    console.log("applicationAdapter", applicationAdapter);
    setApplicationAdapterValue(applicationAdapter);
  }, [applicationAdapter, setApplicationAdapterValue]);
  return (
    <>
      <Stocks />
    </>
  );
};

export default App;
