import { hot } from "react-hot-loader/root";
import React, { useState } from "react";

import cls from "./App.css";

export function App() {
  const [text, setText] = useState("Hello, World!");

  return (
    <div>
      <h1 className={cls.title}>{text}</h1>
      <button onClick={() => setText(`${text}!`)} type="button">
        Bang!
      </button>
    </div>
  );
}

export default hot(App);
