import styled from "styled-components";
import { SelectPicker } from "rsuite";
import { useState } from "react";
import { useSetSelectedOptionsAsArray, useStocks, useOptions } from "ui/hooks";
import { EXCHANGE, STOCKS_MAX_NUM } from "ui/constants_";

const StockControl = ({ ...props }) => {
  const arrayShape = Array.from({ length: STOCKS_MAX_NUM }, (v, i) => i);
  const [values, setValues] = useState({ ...arrayShape.map((v) => null) });
  useSetSelectedOptionsAsArray(values);
  const stocks = useStocks(EXCHANGE);
  const options = useOptions(stocks);

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

const StockControlContainer = styled.div`
  display: inline-flex;
  gap: 10px;
`;

export default StockControl;
