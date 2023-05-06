import { useSetApplicationAdapter } from "ui/hooks";
import "rsuite/dist/rsuite.min.css";
import ChartWithControls from "ui/components/chart-with-controls";
import styled from "styled-components";

const App = ({ applicationAdapter }) => {
  useSetApplicationAdapter(applicationAdapter);

  return (
    <AppContainer>
      <ChartWithControls />
    </AppContainer>
  );
};

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px;
`;

export default App;
