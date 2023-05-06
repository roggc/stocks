import styled from "styled-components";
import ReactSelect, { createFilter } from "react-select";
import Option from "ui/components/dropdown/option";
import MenuList from "ui/components/dropdown/menu-list";

const customFilter = createFilter({ ignoreAccents: false });

const Dropdown = ({
  maxNumOfOptionsSelected,
  selectedOptions,
  setSelectedOptions,
  ...props
}) => {
  return (
    <>
      <Select
        value={selectedOptions}
        onChange={(o) => setSelectedOptions(o)}
        isOptionDisabled={() =>
          selectedOptions.length >= maxNumOfOptionsSelected
        }
        filterOption={customFilter}
        components={{ Option, MenuList }}
        {...props}
      />
    </>
  );
};

const Select = styled(ReactSelect)``;

export default Dropdown;
