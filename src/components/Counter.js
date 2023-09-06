import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/index";

const Counter = () => {

  const dispatchFunction = useDispatch();
  const counter = useSelector((state) => state.counter.value);
  const isCounterInvisible = useSelector((state) => state.counter.isCounterInvisible)

  const incrementHandler = () => {
    dispatchFunction(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatchFunction(counterActions.decrement());
  };

  const increaseHandler = () => {
    dispatchFunction(counterActions.increase(10));
  };

  const toggleCounterHandler = () => {
    dispatchFunction(counterActions.setCounterVisibility())
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
