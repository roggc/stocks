import { List } from "react-virtualized";

const MenuList = ({ children: rows }) => {
  const rowRenderer = ({ key, index, isScrolling, isVisible, style }) => (
    <div key={key} style={style}>
      {rows[index]}
    </div>
  );

  return (
    <List
      width={600}
      height={300}
      rowHeight={30}
      rowCount={rows.length ?? 0}
      rowRenderer={rowRenderer}
    />
  );
};

export default MenuList;
