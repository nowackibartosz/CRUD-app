import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const ClientsId = ({ clientData }) => {
  const { id } = useParams();

  return (
    <div className="detailsID">
      <p>{clientData[id].name}</p>
      <p>{clientData[id].surname}</p>
      <p>{clientData[id].street}</p>
      <p>{clientData[id].code}</p>
      <p>{clientData[id].city}</p>
      <p>{clientData[id].region}</p>
      <p>{clientData[id].imageURL}</p>
      <p>{clientData[id].number}</p>

      <button
        onClick={() => {
          clientData.splice({ id }, 1);
        }}
      >
        USUŃ
      </button>

      <Link to={`/clients/${id}/edit`}>
        {" "}
        <button>EDIT</button>
      </Link>
    </div>
  );
};

export default ClientsId;
