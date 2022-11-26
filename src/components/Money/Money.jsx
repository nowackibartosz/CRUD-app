import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { withdrawMoney, depositMoney } from "../../redux/moneySlice";
import { useFormik } from "formik";
const Money = () => {

  const dispatch = useDispatch();
  const money = useSelector((state) => state.money.value);

  const formik = useFormik({
    initialValues: {
      cash: "",
      
    },

    ///PMAIETAJ O CYKLU ZYCIA KOMPONENTU/////
    onSubmit: (values) => {
      
    },

    // validationSchema: yupSchema,
  });



  return (
   <div>
      <button onClick={() => dispatch(withdrawMoney())}>-</button>
      {money}

      <button onClick={() => dispatch(depositMoney())}>+</button>


      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="login">Deposit</label>
          <input
            type="text"
            id="deposit"
            name="deposit"
            onChange={dispatch(withdrawMoney())}
            onBlur={formik.handleBlur}
            value={formik.values.login}
          />
        </div>
        
</form>
        </div>
  );
};

export default Money;
