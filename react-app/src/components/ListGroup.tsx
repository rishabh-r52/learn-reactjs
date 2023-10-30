import { useState } from "react";

function ListGroup() {
  let items = [
    "The Last of Us",
    "God Of War",
    "The Witcher 3",
    "Grand Theft Auto V",
    "Assassin's Creed II",
  ];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  // Message to be printed when items list is empty
  const EmptyMessage = items.length === 0 && <p>No Elements Found!</p>;

  // Item Click Event
  // const HandleClick = (event: MouseEvent) => {
  //   console.log(event);
  // };

  // Message to be printed when items list is not empty
  const NonEmptyMessage = items.map((item, index) => (
    <li
      key={item}
      className={
        selectedIndex === index ? "list-group-item active" : "list-group-item"
      }
      onClick={() => {
        setSelectedIndex(index);
        console.log(event);
      }}
    >
      {item}
    </li>
  ));

  return (
    <>
      <h1>List Items</h1>
      {EmptyMessage}
      <ul className="list-group">{NonEmptyMessage}</ul>
    </>
  );
}

export default ListGroup;
