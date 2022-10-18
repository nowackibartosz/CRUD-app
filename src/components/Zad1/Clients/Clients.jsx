import React from "react";
import "./Clients.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Clients = ({ clientData }) => {
  const { id } = useParams();
  return (
    <div className="clients">
      <div>Clients</div>

      <table className="hehe">
        <thead>
          <tr>
          
            <th>name</th>
            <th>surname</th>
            <th>city</th>
            <th>number</th>
            <th>imageURL</th>
          </tr>
        </thead>
        <tbody>
          {clientData.map((el, ido) => (
            <tr key={id}>
              <Link to={`/clients/${ido}`}><th>{el.name}</th></Link>
              <th>{el.surname}</th>
              <th>{el.city}</th>
              <th>{el.number}</th>
              <th>{el.imageURL}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Clients;
