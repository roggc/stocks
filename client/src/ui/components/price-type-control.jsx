import styled from "styled-components";

const availableTypes = ["o", "h", "l", "c"];
const labelTypes = ["Open", "High", "Low", "Close"];

const PriceTypeControl = ({ priceType, setPriceType, ...props }) => {
  return (
    <PriceTypeControlContainer {...props}>
      {availableTypes.map((t, i) => (
        <RadioContainer key={t}>
          <Input
            type="radio"
            name="price-type"
            value={t}
            checked={priceType === t}
            onChange={({ target: { value } }) => setPriceType(value)}
          />
          <Label>{labelTypes[i]}</Label>
        </RadioContainer>
      ))}
    </PriceTypeControlContainer>
  );
};

const Input = styled.input``;
const PriceTypeControlContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const RadioContainer = styled.div``;
const Label = styled.label``;

export default PriceTypeControl;
