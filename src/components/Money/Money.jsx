import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withdrawMoney, depositMoney } from "../../redux/moneySlice";

const Money = () => {
  const dispatch = useDispatch();
  const money = useSelector((state) => state.money.value);
  const [moneyToWithdraw, setMoneyToWithdraw] = useState(0);
  const [moneyToDeposit, setMoneyToDeposit] = useState(0);

  const handleWithdraw = (e) => {
    console.log("form event", e);
    e.preventDefault();
    dispatch(withdrawMoney(moneyToWithdraw));
    setMoneyToWithdraw(0);
    console.log(money);
  };
  const handleDeposit = (e) => {
    e.preventDefault();
    console.log("ok");
    dispatch(depositMoney(moneyToDeposit));

    console.log(money);
  };

  return (
    <div>
      {money}
      <form onSubmit={handleWithdraw}>
        <label htmlFor="">
          <input
            type="number"
            placeholder="withdraw"
            onChange={(e) => setMoneyToWithdraw(e.target.value)}
          />

          <button type="submit">OK</button>
        </label>
      </form>
      <form onSubmit={handleDeposit}>
        <label htmlFor="">
          <input
            type="number"
            placeholder="deposit"
            onChange={(e) => setMoneyToDeposit(e.target.value)}
          />
          <button type="submit">OK</button>
        </label>
      </form>
    </div>
  );
};

export default Money;
