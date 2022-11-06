import "./Clients.css";
import { Link } from "react-router-dom";
import { useQuery, QueryClient } from "@tanstack/react-query";
import { getAllClients, handleDelete } from "../../Serwis/clientService";
import React, { useState } from "react";

const Clients = () => {
  const { data, isLoading } = useQuery(["clients"], getAllClients);

  if (isLoading) {
    return <p>Loading...</p>;
  }

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
          {data.map((el) => (
            <tr key={el.id}>
              <Link to={`/clients/${el.id}`}>
                <th>{el.name}</th>
              </Link>
              <th>{el.surname}</th>
              <th>{el.city}</th>
              <th>{el.number}</th>
              <th>{el.imageURL}</th>
              <th>
                <button
                  onClick={() => {
                    handleDelete(el.id);
                    QueryClient.invalidateQueries({ queryKey: ["clients"] });
                  }}
                >
                  DELETE
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Clients;
