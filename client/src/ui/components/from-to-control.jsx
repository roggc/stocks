import styled from "styled-components";
import { RangeSlider } from "rsuite";
import moment from "moment";
import { useSlice } from "ui/slices";
import { MAX, MIN, STEP } from "ui/constants_/slider";

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
  const [origin, setOrigin] = useSlice("from");
  const [end, setEnd] = useSlice("to");
  const onChange = ([origin_, end_]) => {
    if (origin_ < end_) {
      setOrigin(origin_);
      setEnd(end_);
    }
  };

  return (
    <FromToControlContainer {...props}>
      <RangeSlider
        min={MIN}
        max={MAX}
        step={STEP}
        renderMark={renderValue}
        renderTooltip={renderValue}
        onChange={onChange}
        value={[origin, end]}
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
