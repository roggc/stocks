import styled from "styled-components";
import StockControl from "ui/components/stock-control";
import PriceTypeControl from "ui/components/price-type-control";
import FromToControl from "ui/components/from-to-control";

const ChartControls = ({ ...props }) => {
  return (
    <ChartControlsContainer {...props}>
      <StockControl />
      <PriceTypeControl />
      <FromToControl />
    </ChartControlsContainer>
  );
};

const ChartControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  border: 1px solid grey;
  border-radius: 10px;
  padding: 40px;
  width: fit-content;
`;

export default ChartControls;
