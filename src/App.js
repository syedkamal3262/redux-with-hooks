import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import DisplayCounter from "./components/DisplayCounter";
import { Provider } from "react-redux";
import { store } from "./store/store";
function App() {
  return (
    <Provider store={store}>
      <div>
        <DisplayCounter />
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
