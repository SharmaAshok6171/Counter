import "./styles.css";
import { useReducer } from "react";

const initState = {
  count: 0
};
const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case "Add": {
      return {
        ...state,
        count: state.count++
      };
    }
    case "Del": {
      return {
        ...state,
        count: state.count--
      };
    }
    default:
      return state;
  }
};
export default function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { count } = state;
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: "Add" })}>Add</button>
      <button onClick={() => dispatch({ type: "Del" })}>Del</button>
    </div>
  );
}
