import styled from "styled-components";
import ReactSelect, { createFilter } from "react-select";
import Option from "ui/components/option";
import MenuList from "ui/components/menu-list";
import { useSelectedOptions } from "ui/hooks";

const customFilter = createFilter({ ignoreAccents: false });

const Dropdown = ({ maxNumOfOptionsSelected, ...props }) => {
  const [selectedOptions, setSelectedOptions] = useSelectedOptions();
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
