import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { withdrawMoney, depositMoney } from "../../redux/moneySlice";

const Money = () => {
  const dispatch = useDispatch();
  const money = useSelector((state) => state.money.value);

  const handleWithdraw = (e) => {
    e.preventDefault();
    console.log("ok");
    dispatch(withdrawMoney(Number(e.target.value)));

    console.log(money);
  };
  const handleDeposit = (e) => {
    e.preventDefault();
    console.log("ok");
    dispatch(depositMoney(Number(e.target.value)));

    console.log(money);
  };

  return (
    <div>
      {money}
      <form onSubmit={handleWithdraw}>
        <label htmlFor="">
          <input type="number" placeholder="withdraw" />

          <button type="submit">OK</button>
        </label>
      </form>
      <form onSubmit={handleDeposit}>
        <label htmlFor="">
          <input type="number" placeholder="deposit" />

          <button type="submit">OK</button>
        </label>
      </form>
    </div>
  );
};

export default Money;
