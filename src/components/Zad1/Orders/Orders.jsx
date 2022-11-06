
import { useQuery } from "@tanstack/react-query";
import "./Orders.css";

import { Link } from "react-router-dom";
import { getAllOrders, handleDelete } from "../../Serwis/orderService";
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};





const Orders = () => {
  const { data, isLoading, error } = useQuery(["orders"], getAllOrders);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="orders">
      <table className="hihi">
        <thead>
          <tr>
            <th>id</th>

            <th>order</th>
            <th>description</th>
            <th>telefon zamawiającego</th>
          </tr>
        </thead>
        <tbody>
          {data.map((el) => (
            <tr key={el.id}>
              <th>{el.id}</th>
              <Link to={`/orders/${el.id}`}>
                <th>{el.tele}</th>
              </Link>

              <th>{el.body}</th>
              <th>{el.description}</th>
              <th>
                <Button onClick={handleOpen}>DELETE</Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="parent-modal-title"
                  aria-describedby="parent-modal-description"
                >
                  <Box sx={{ ...style, width: 400 }}>
                    <p className="parent-modal-description">Are you sure?</p>
                   
                    <div className="hihi">
                      <Button onClick={() => {
                        handleDelete(el.id)
                      }}>YES</Button>
                      <Button onClick={handleClose}>NO</Button>
                    </div>
                  </Box>
                </Modal>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
