import PriceTypeControl from "ui/components/price-type-control";
import styled from "styled-components";
import { usePriceType } from "ui/hooks";

const ChartControls = ({ ...props }) => {
  const [priceType, setPriceType] = usePriceType();
  return (
    <ChartControlsContainer {...props}>
      <PriceTypeControl priceType={priceType} setPriceType={setPriceType} />
    </ChartControlsContainer>
  );
};

const ChartControlsContainer = styled.div``;

export default ChartControls;
