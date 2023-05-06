import { useSetApplicationAdapter } from "ui/hooks";
import "rsuite/dist/rsuite.min.css";
import ChartWithControls from "ui/components/chart-with-controls";

const App = ({ applicationAdapter }) => {
  useSetApplicationAdapter(applicationAdapter);

  return (
    <>
      <ChartWithControls />
    </>
  );
};

export default App;
