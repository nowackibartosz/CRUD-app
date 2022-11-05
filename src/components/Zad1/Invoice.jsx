import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllInvoices } from "../Serwis/invoicesService";

const Invoice = () => {
  const { data, isLoading } = useQuery(["faktury"], getAllInvoices);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="fakturki">
      <div>Fakturi</div>

      <table className="fakturyTabela">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nazwa faktury</th>
            <th>Kwota faktury</th>
          </tr>
        </thead>
        <tbody>
          {data.map((el) => (
            <tr key={el.id}>
              <th>{el.id}</th>

              <th>{el.invoiceName}</th>
              <th>{el.invoiceCost}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Invoice;
