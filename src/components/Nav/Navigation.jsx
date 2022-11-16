import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/clients">Clients</Link>
          </li>
          <li>
            <Link to="/clients/add">Clients Add</Link>
          </li>
          {/* <li>
            <Link to="/clients/:id">Clients Id </Link>
          </li> */}
          {/* <li>
            <Link to="/clients/:id/edit">Clients Id edit</Link>
          </li> */}
          <li>
            <Link to="/orders">Orders</Link>
          </li>
          {/* <li>
            <Link to="/orders/:id">Orders ID</Link>
          </li> */}
          <li>
            <Link to="/orders/add">Orders Add</Link>
          </li>
          <li>
            <Link to="/invoices">Invoices</Link>
          </li>
          <li>
            <Link to="/invoices/add">Invoices Add</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
