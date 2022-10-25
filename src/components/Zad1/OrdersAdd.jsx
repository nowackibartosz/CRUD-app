import React from "react";

import { useFormik } from "formik";
// import { yupSchema } from "../Validation/Val";
import { addOrder } from "../Serwis/orderService";

//???????????????????////
const OrdersAdd = () => {
  const formik = useFormik({
    initialValues: {
      body: "",
    },
    onSubmit: (values) => {
      addOrder(values);
    },
    // validationSchema: yupSchema, //wpięcie schematu walidacji
  });

  return (
    <div className="addOrders">
      <div>Add your new order</div>
      <br />
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="body">whats order: </label>
          <input
            type="text"
            id="body"
            name="body"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.body}
          />
        </div>
        <br />
        <button type="submit">ORDER</button>
      </form>

      {formik.touched.name && formik.errors.name ? (
        <p style={{ color: "red" }}>{formik.errors.name}</p>
      ) : null}

      {/* <form action="/action_page.php">
        <select id="client">
          {.map((el) => (
            <option value={el.numbe}>
              {" "}
              {el.name} {el.surname}
            </option>
          ))}
        </select>
      </form> */}
    </div>
  );
};

export default OrdersAdd;
