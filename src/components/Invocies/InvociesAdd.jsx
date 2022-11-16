import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useFormik } from "formik";
// import { yupSchema } from "../Validation/Val";
import { getAllOrders } from "../Serwis/orderService";
import { getAllClients } from "../Serwis/clientService";

const InvoicesAdd = () => {
  const [detailClient, setDetailClient] = useState(false);
  const [showOrders, setShowOrders] = useState(false);
  const [clientID, setClientID] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    onSubmit: (values) => {
      setDetailClient(true);
      setClientID(values.name);
    },
    // validationSchema: yupSchema, //wpięcie schematu walidacji
  });

  const { data, isLoading } = useQuery(["clients"], getAllClients);
  const { data1 } = useQuery(["orders"], getAllOrders);
  if (isLoading) {
    return <p>Loading...</p>;
  }

  const handleOrders = () => {
    setShowOrders(true);
  };

  console.log(clientID);
  console.log(detailClient);
  return (
    <div>
      <br />
      <div>Choose client</div>
      <br />
      <div className="invicesAdd">
        <form onSubmit={formik.handleSubmit}>
          <select
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            {data.map((el) => (
              <option value={el.id}>
                {" "}
                {el.name} {el.surname}
              </option>
            ))}
          </select>

          <button type="submit">Pokaż szczegóły klienta</button>
        </form>

        {formik.touched.tele && formik.errors.tele ? (
          <p style={{ color: "red" }}>{formik.errors.tele}</p>
        ) : null}
      </div>

      {detailClient ? (
        <div className="detailsID">
          <div>
            <p>{data[clientID - 1].name}</p>
            <p>{data[clientID - 1].surname}</p>
            <p>{data[clientID - 1].street}</p>
            <p>{data[clientID - 1].code}</p>
            <p>{data[clientID - 1].city}</p>
            <p>{data[clientID - 1].region}</p>
            <p>{data[clientID - 1].imageURL}</p>
            <p>{data[clientID - 1].number}</p>
          </div>
          <button onClick={handleOrders}>
            Pokaż zamówienia klienta {data[clientID - 1].name}{" "}
            {data[clientID - 1].surname}
          </button>
          <br />
          {showOrders ? (
            <table className="hihi">
              <thead>
                <tr>
                  <th>id</th>

                  <th>order</th>
                  <th>description</th>
                  <th>telefon zamawiającego</th>
                </tr>
              </thead>
              <tbody>
                <tr key={data1[clientID - 1].id}>
                  <th>{data[clientID - 1].id}</th>

                  <th>{data[clientID - 1].tele}</th>

                  <th>{data[clientID - 1].body}</th>
                  <th>{data[clientID - 1].description}</th>
                </tr>
              </tbody>
            </table>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default InvoicesAdd;
