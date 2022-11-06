import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getSingleClient } from "../Serwis/clientService";
import { getSingleOrder } from "../Serwis/orderService";
import { useQuery } from "@tanstack/react-query";
const OrdersId = () => {
  const { id } = useParams();
  console.log(id);

  const [data, setData] = useState({});

  useEffect(() => {
    getSingleClient(id).then((data) => {
      setData(data);
    });
  }, []);

  const { data: order, isLoading } = useQuery(["singleOrder", id], () =>
    getSingleOrder(id)
  );

  return (
    <div className="detailsID">
      <p>Dane zamawiającego:</p>
      <p>
        {data.name} {data.surname}
      </p>

      <Link to={`/clients/${id}`}>
        {" "}
        <button>szczegółowe dane klienta</button>
      </Link>
      <br />
      <br />
      <div>DANE ZAMÓWIENIA</div>
      {data.tele}
    </div>
  );
};

export default OrdersId;
