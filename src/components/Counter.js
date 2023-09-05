import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {

  const dispatchFunction = useDispatch();
  const counter = useSelector((state) => state.counter);

  const incrementHandler = () => {
    dispatchFunction({
      type: "increment",
    });
  };

  const decrementHandler = () => {
    dispatchFunction({
      type: "decrement",
    });
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>+</button>
        <button onClick={decrementHandler}>-</button>
      </div>
      <button onClick={toggleCounterHandler}>Hide / Show</button>
    </main>
  );
};

export default Counter;
