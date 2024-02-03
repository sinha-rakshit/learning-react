import { useState } from "react";
import "./App.css";

const App = () => {
  const [counter, SetCounter] = useState(0);
  return (
    <div className="App">
      <button onClick={() => SetCounter((PrevCount) => PrevCount - 1)}>
        {" "}
        -{" "}
      </button>
      <h1>{counter}</h1>
      <button onClick={() => SetCounter((PrevCount) => PrevCount + 1)}>
        {" "}
        +{" "}
      </button>
    </div>
  );
};

export default App;
