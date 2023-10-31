import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  selectItemHandle: (item: string) => void;
}

function ListGroup({ items, heading, selectItemHandle }: Props) {
  // React Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // Message to be printed when items list is empty
  const EmptyMessage = items.length === 0 && <p>No Elements Found!</p>;

  // Message to be printed when items list is not empty
  const NonEmptyMessage = items.map((item, index) => (
    <li
      key={item}
      className={
        selectedIndex === index ? "list-group-item active" : "list-group-item"
      }
      onClick={() => {
        setSelectedIndex(index);
        selectItemHandle(item);
      }}
    >
      {item}
    </li>
  ));

  return (
    <>
      <h1>{heading}</h1>
      {EmptyMessage}
      <ul className="list-group">{NonEmptyMessage}</ul>
    </>
  );
}

export default ListGroup;
