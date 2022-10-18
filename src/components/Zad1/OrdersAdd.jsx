import React from "react";

const OrdersAdd = ({ clientData }) => {
  return (
    <div className="addOrders">
      <form action="/action_page.php">
        <select id="client">
          {clientData.map((el) => (
            <option value={el.number}>
              {" "}
              {el.name} {el.surname}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default OrdersAdd;
