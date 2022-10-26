import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useFormik } from "formik";
// import { yupSchema } from "../Validation/Val";
import { addOrder } from "../Serwis/orderService";
import { getAllClients } from "../Serwis/clientService";
//???????????????????////
const OrdersAdd = () => {
  const formik = useFormik({
    initialValues: {
      tele: "",
      body: "",
      description: "",
    },
    onSubmit: (values) => {
      addOrder(values);
    },
    // validationSchema: yupSchema, //wpięcie schematu walidacji
  });

  const { data, isLoading } = useQuery(["clients"], getAllClients);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div>Add your new order</div>
      <br />
      <div className="addOrders">
        <form onSubmit={formik.handleSubmit}>
          <select
            name="tele"
            value={formik.values.tele}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            {data.map((el) => (
              <option value={el.number}>
                {" "}
                {el.name} {el.surname}
              </option>
            ))}
          </select>
          <div>
            <label htmlFor="body">body</label>
            <input
              type="text"
              id="body"
              name="body"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.body}
            />
          </div>
          <div>
            <label htmlFor="description">description</label>
            <input
              type="text"
              id="description"
              name="description"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.description}
            />
          </div>
          <button type="submit">ORDER</button>
        </form>

        {formik.touched.tele && formik.errors.tele ? (
          <p style={{ color: "red" }}>{formik.errors.tele}</p>
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
    </div>
  );
};

export default OrdersAdd;
