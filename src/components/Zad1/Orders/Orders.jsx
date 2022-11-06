
import { useQuery, useQueryClient } from "@tanstack/react-query";
import "./Orders.css";

import { Link } from "react-router-dom";
import { getAllOrders, handleDelete } from "../../Serwis/orderService";
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { useState } from "react";
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
  const queryClient = useQueryClient()
  const [open, setOpen] = useState(false);
  const [elModal, setElModal] = useState("");
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
                <Button onClick={() => {
                    handleOpen();
                    setElModal(el.id);
                    
                  }}>DELETE</Button>
                
              </th>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <p className="parent-modal-description">Are you sure?</p>

          <div className="hihi">
            <Button
              onClick={() => {
                handleDelete(elModal);
               
                queryClient.invalidateQueries({ queryKey: ['orders'] })
                handleClose();
                
              }}
            >
              YES
            </Button>
            <Button onClick={handleClose}>NO</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Orders;
