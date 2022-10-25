import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getSingleClient, handleDelete } from "../Serwis/orderService";

const ClientsId = () => {
  const { id } = useParams();

  const [data, setData] = useState({});

  useEffect(() => {
    getSingleClient(id).then((data) => {
      setData(data);
    });
  }, []);

  return (
    <div className="detailsID">
      <p>{data.name}</p>
      <p>{data.surname}</p>
      <p>{data.street}</p>
      <p>{data.code}</p>
      <p>{data.city}</p>
      <p>{data.region}</p>
      <p>{data.imageURL}</p>
      <p>{data.number}</p>

      <button onClick={() => handleDelete(data.id)}>USUŃ</button>

      <Link to={`/clients/${id}/edit`}>
        {" "}
        <button>EDIT</button>
      </Link>
    </div>
  );
};

export default ClientsId;
