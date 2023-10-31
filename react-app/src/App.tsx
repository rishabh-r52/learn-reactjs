import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

const App = () => {
  const [AlertVisibile, SetAlertVisibility] = useState(false);

  // Button properties
  const buttonText = "Click Me";
  const buttonType = "primary";
  const buttonFunction = () => {
    SetAlertVisibility(true);
  };

  // Alert properties
  const strongText = "Alert!";
  const alertCloseFunction = () => {
    SetAlertVisibility(false);
  };

  return (
    <>
      <div>
        <>
          {AlertVisibile && (
            <Alert alertStrong={strongText} onClose={alertCloseFunction}>
              "This is a special alert component, It pops up when the button is
              clicked and it also allows us to close the Alert."
            </Alert>
          )}

          <Button
            btnText={buttonText}
            btnType={buttonType}
            clickfunction={buttonFunction}
          />
        </>
      </div>
    </>
  );
};

export default App;

// import Alert from "./components/Alert";

// const App = () => {
//   return (
//     <Alert>
//       This is a sample alert message! <span>For Testing.</span>
//     </Alert>
//   );
// };

// export default App;

// import ListGroup from "./components/ListGroup";

// function App() {
//   let items = [
//     "The Last of Us",
//     "God Of War",
//     "The Witcher 3",
//     "Grand Theft Auto V",
//     "Assassin's Creed II",
//   ];

//   let heading = "Games";

//   const selectItemHandle = (item: string) => console.log(item);

//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading={heading}
//         selectItemHandle={selectItemHandle}
//       />
//     </div>
//   );
// }

// export default App;
