import styled from "styled-components";
import { Radio, RadioGroup } from "rsuite";
import { usePriceType } from "ui/hooks";

const availableTypes = ["o", "h", "l", "c"];
const labelTypes = ["Open", "High", "Low", "Close"];

const PriceTypeControl = ({ ...props }) => {
  const [priceType, setPriceType] = usePriceType();
  return (
    <PriceTypeControlContainer {...props}>
      <RadioGroup
        inline
        name="price-type"
        value={priceType}
        onChange={setPriceType}
      >
        {availableTypes.map((t, i) => (
          <Radio key={t} value={t}>
            {labelTypes[i]}
          </Radio>
        ))}
      </RadioGroup>
    </PriceTypeControlContainer>
  );
};

const PriceTypeControlContainer = styled.div``;

export default PriceTypeControl;
