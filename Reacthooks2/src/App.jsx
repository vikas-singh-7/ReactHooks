import React from "react";

import { useRef } from "react";
import SimpleForm from "./components/Form";
const App = () => {
  const ref = useRef();
  return (
    <div>
      <h2>lets understand react hook forms</h2>

      <SimpleForm myref={ref} />

      <button onClick={() => ref.current.focus()}>focus</button>
    </div>
  );
};

export default App;
