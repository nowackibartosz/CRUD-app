import React from "react";
import { useParams } from "react-router-dom";

const ClientsId = () => {
  const param = useParams();
  console.log(param); // {orderId: '1'}
  return <div>Client ID</div>;
};

export default ClientsId;
