import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useFormik } from "formik";
// import { yupSchema } from "../Validation/Val";
import { getSingleClient } from "../Serwis/clientService";
import { getAllClients } from "../Serwis/clientService";

const InvoicesAdd = () => {
  const [detailClient, setDetailClient] = useState(false);
  const [clientID, setClientID] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    onSubmit: (values) => {
      setDetailClient(!detailClient);
      setClientID(values.name);
    },
    // validationSchema: yupSchema, //wpięcie schematu walidacji
  });

  const { data, isLoading } = useQuery(["clients"], getAllClients);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  console.log(clientID);

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
          <p>{data[clientID].name}</p>
          <p>{data[clientID].surname}</p>
          <p>{data[clientID].street}</p>
          <p>{data[clientID].code}</p>
          <p>{data[clientID].city}</p>
          <p>{data[clientID].region}</p>
          <p>{data[clientID].imageURL}</p>
          <p>{data[clientID].number}</p>
        </div>
      ) : null}
      <div>hehehe</div>
    </div>
  );
};

export default InvoicesAdd;
