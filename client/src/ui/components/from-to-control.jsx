import styled from "styled-components";
import { RangeSlider } from "rsuite";
import { getUNIXTimestamp } from "ui/utils";
import moment from "moment";

const max = getUNIXTimestamp(Date.now());
const step = 60 * 60 * 24;
const min = max - step * 365;
const renderValue = (value) => {
  const date = new Date(value * 1000);
  const momentValue = moment(date);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <DateContainer>
      {
        //prettier-ignore
        `${months[momentValue.month()]} ${momentValue.date()} ${momentValue.year()}`
      }
    </DateContainer>
  );
};

const FromToControl = ({ ...props }) => {
  return (
    <FromToControlContainer {...props}>
      <RangeSlider
        min={min}
        max={max}
        step={step}
        renderMark={renderValue}
        renderTooltip={renderValue}
        defaultValue={[min, max]}
      />
    </FromToControlContainer>
  );
};

const FromToControlContainer = styled.div`
  width: 600px;
`;
const DateContainer = styled.div`
  white-space: nowrap;
`;

export default FromToControl;
