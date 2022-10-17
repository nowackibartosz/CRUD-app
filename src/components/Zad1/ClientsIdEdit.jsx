import React from "react";
import { useParams } from "react-router-dom";

const ClientsIdEdit = () => {
  const param = useParams();
  console.log(param); // {orderId: '1'}
  return <div> ClientsIdEdit</div>;
};

export default ClientsIdEdit;

