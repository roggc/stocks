import ChartControls from "ui/components/chart-controls";
import styled from "styled-components";

const ChartWithControls = ({ ...props }) => {
  return (
    <ChartWithControlsContainer {...props}>
      <ChartControls />
    </ChartWithControlsContainer>
  );
};

const ChartWithControlsContainer = styled.div``;

export default ChartWithControls;
