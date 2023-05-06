import styled from "styled-components";
import ChartControls from "ui/components/chart-controls";
import Chart from "ui/components/chart";

const ChartWithControls = ({ ...props }) => {
  return (
    <ChartWithControlsContainer {...props}>
      <ChartControls />
      <Chart />
    </ChartWithControlsContainer>
  );
};

const ChartWithControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export default ChartWithControls;
