import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useFormik } from "formik";
// import { yupSchema } from "../Validation/Val";
import { getAllOrders } from "../Serwis/orderService";
import { getAllClients } from "../Serwis/clientService";

const InvoicesAdd = () => {
  const [showOrders, setShowOrders] = useState(false);
  const [clientID, setClientID] = useState("");
  const [clientDetails, setClientDetails] = useState(undefined);

  const formik = useFormik({
    initialValues: {
      id: "",
    },
    onSubmit: (values) => {
      setClientID(values.id);
      const konkretnyKlient = data.find(
        (client) => String(client.id) === String(values.id)
      );
      console.log("Konkretny klient", konkretnyKlient);
      setClientDetails(konkretnyKlient);
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
    // przefiltrować po clientDetails . phone number czy cos
    // data1
  };

  //   console.log(clientID);
  //   console.log(detailClient);
  return (
    <div>


      <br />
      <div>Choose client</div>
      <br />
      <div className="invicesAdd">
        <form onSubmit={formik.handleSubmit}>
          <select
            name="id"
            value={formik.values.id}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            {data.map((el) => (
              <option value={el.id} key={el.id}>
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

      {clientDetails ? (
        <div className="detailsID">
          <div>
            <p>{clientDetails.name}</p>
            <p>{clientDetails.surname}</p>
            <p>{clientDetails.street}</p>
            <p>{clientDetails.code}</p>
            <p>{clientDetails.city}</p>
            <p>{clientDetails.region}</p>
            <p>{clientDetails.imageURL}</p>
            <p>{clientDetails.number}</p>
          </div>
          <button onClick={handleOrders}>
            Pokaż zamówienia klienta {clientDetails.name}{" "}
            {clientDetails.surname}
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
