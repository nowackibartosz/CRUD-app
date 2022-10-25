import React from "react";
import { useQuery } from "@tanstack/react-query";
import "./Orders.css";
import { getAllOrders } from "../../Serwis/orderService";



const Orders = () => {
  const { data, isLoading, error } = useQuery(["orders"], getAllOrders);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="orders">
      <table className="hihi">
        <thead>
          <tr>
            <th>id</th>
            <th>order</th>
          </tr>
        </thead>
        <tbody>
          {data.map((el) => (
            <tr key={el.id}>
              <th>{el.id}</th>
              <th>{el.body}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
