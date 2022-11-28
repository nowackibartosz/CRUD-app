import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { withdrawMoney, depositMoney } from "../../redux/moneySlice";
import { useState } from "react";

const Money = () => {
  const dispatch = useDispatch();
  const money = useSelector((state) => state.money.value);

  const [formNumber, setFormNumber] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ok");
    console.log(e.target.value);
    dispatch(withdrawMoney(e.target.value));
  };

  return (
    <div>
      <button onClick={() => dispatch(withdrawMoney())}>-</button>
      {money}

      <button onClick={() => dispatch(depositMoney())}>+</button>

      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          <input
            type="number"
            placeholder="wypłać hajs"
            onChange={(e) => dispatch(withdrawMoney(e.target.value))}
          />
          <button type="submit">OK</button>
        </label>
      </form>
    </div>
  );
};

export default Money;
