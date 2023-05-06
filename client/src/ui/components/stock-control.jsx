import styled from "styled-components";
import { SelectPicker } from "rsuite";
import { useState } from "react";
import { useSetSelectedOptionsAsArray } from "ui/hooks";

const StockControl = ({ options, maxNumberOfStocks, ...props }) => {
  const arrayShape = Array.from({ length: maxNumberOfStocks }, (v, i) => i);
  const [values, setValues] = useState({ ...arrayShape.map((v) => null) });
  useSetSelectedOptionsAsArray(values);

  return (
    <StockControlContainer {...props}>
      {arrayShape.map((v) => (
        <SelectPicker
          key={v}
          data={options}
          virtualized
          onChange={(value) =>
            setValues((values_) => ({ ...values_, [v]: value }))
          }
          placeholder="Select stock"
        />
      ))}
    </StockControlContainer>
  );
};

const StockControlContainer = styled.div``;

export default StockControl;
