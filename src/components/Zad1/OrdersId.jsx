import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getSingleClient } from "../Serwis/clientService";

const OrdersId = () => {
  const { id } = useParams();

  const [data, setData] = useState({});

  useEffect(() => {
    getSingleClient(id).then((data) => {
      setData(data);
    });
  }, []);

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
      
    </div>
  );
};

export default OrdersId;
