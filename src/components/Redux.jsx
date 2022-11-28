import { useDispatch, useSelector } from "react-redux";
import { decremented, incremented } from "../redux/counterSlice";


export const Redux = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);




  return (
    <>
      <button onClick={() => dispatch(decremented())}>-</button>
      {counter}
      <button onClick={() => dispatch(incremented())}>+</button>
    
    </>
  );
};
