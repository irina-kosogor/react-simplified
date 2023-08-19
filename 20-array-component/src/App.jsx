import { useState } from "react";

const INITIAL_VALUE = ["A", "B", "C"];

function App() {
  const [array, setArray] = useState(INITIAL_VALUE);
  const [value, setValue] = useState("");

  const handleRemoveFirstElement = () => {
    setArray((currentArray) => currentArray.slice(1));
  };

  const removeSpecificLetter = (letter) => {
    setArray((currentArray) =>
      currentArray.filter(
        (item) => item.toLocaleLowerCase() !== letter.toLocaleLowerCase()
      )
    );
  };

  const addLetterToStart = (letter) => {
    setArray((prevArray) => [letter.toUpperCase(), ...prevArray]);
  };

  const addLetterToEnd = (letter) => {
    setArray((prevArray) => [...prevArray, letter.toUpperCase()]);
  };

  const clear = () => {
    setArray([]);
  };

  const reset = () => {
    setArray(INITIAL_VALUE);
  };

  const updateAToH = () => {
    setArray((currentArray) =>
      currentArray.map((item) => (item === "A" ? "H" : item))
    );
  };

  const addLetterAtIndex = (letter, index) => {
    setArray((currentArray) => [
      ...currentArray.slice(0, index),
      letter.toUpperCase(),
      ...currentArray.slice(index),
    ]);
  };

  return (
    <div>
      <button onClick={handleRemoveFirstElement}>Remove First Element</button>
      <br />
      <button onClick={() => removeSpecificLetter("b")}>Remove All B's</button>
      <br />
      <button onClick={() => addLetterToStart("a")}>Add To Start</button>
      <br />
      <button onClick={() => addLetterToEnd("z")}>Add To End</button>
      <br />
      <button onClick={clear}>Clear</button>
      <br />
      <button onClick={reset}>Reset</button>
      <br />
      <button onClick={updateAToH}>Update A To H</button>
      <br />
      <button onClick={() => addLetterAtIndex("C", 1)}>Add C At 2</button>
      <br />
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <br />
      <button onClick={() => addLetterToStart(value)}>
        Add Value To Array
      </button>
      <br />
      {array.join(", ")}
    </div>
  );
}

export default App;
