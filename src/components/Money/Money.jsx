import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { withdrawMoney,depositMoney } from "../../redux/moneySlice"

const Money = () => {
  const dispatch = useDispatch();
  const money = useSelector((state) => state.money.value);



  return (
    <>
    <button onClick={() => dispatch(withdrawMoney())}>-</button>
    {money}
    <button onClick={() => dispatch(depositMoney())}>+</button>
    </>
  )
};

export default Money;
