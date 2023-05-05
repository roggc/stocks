import styled from "styled-components";
import ReactSelect, { createFilter } from "react-select";
import Option from "ui/components/option";
import MenuList from "ui/components/menu-list";
import { useState } from "react";

const customFilter = createFilter({ ignoreAccents: false });

const Dropdown = (props) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  return (
    <>
      <Select
        value={selectedOptions}
        onChange={(o) => setSelectedOptions(o)}
        isOptionDisabled={() => selectedOptions.length >= 3}
        filterOption={customFilter}
        components={{ Option, MenuList }}
        {...props}
      />
    </>
  );
};

const Select = styled(ReactSelect)``;

export default Dropdown;
