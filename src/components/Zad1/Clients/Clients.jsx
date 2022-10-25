import "./Clients.css";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAllClients } from "../../Serwis/clientService";

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
          {/*sprobowac za pomoca nie tabeli - GRIDEM :) */}

          {data.map((el) => (
            <tr key={el.id}>
              <Link to={`/clients/${el.id}`}>
                <th>{el.name}</th>
              </Link>
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
