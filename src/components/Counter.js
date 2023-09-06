import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {

  const dispatchFunction = useDispatch();
  const counter = useSelector((state) => state.counter);
  const isCounterInvisible = useSelector((state) => state.isCounterInvisible)

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

  const increaseHandler = () => {
    dispatchFunction({
      type: "increase",
      number: 10
    });
  };

  const toggleCounterHandler = () => {
    dispatchFunction({type: "visibility"})
  };

  return (
    <main className={classes.counter}>
      <h1>Counter</h1>
      {!isCounterInvisible && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>+</button>
        <button onClick={increaseHandler}>+10</button>
        <button onClick={decrementHandler}>-</button>
      </div>
      <button onClick={toggleCounterHandler}>Hide / Show</button>
    </main>
  );
};

export default Counter;
