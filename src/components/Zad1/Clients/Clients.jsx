import React from "react";
import "./Clients.css";

import Client from "./Client/Client";

const Clients = ({ clientData }) => {
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
          {clientData.map((el, index) => (
            <Client
              key={index}
              name={el.name}
              surname={el.surname}
              city={el.city}
              number={el.number}
              imageURL={el.imageURL}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Clients;
