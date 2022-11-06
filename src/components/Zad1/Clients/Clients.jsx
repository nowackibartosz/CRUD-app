import "./Clients.css";
import { Link } from "react-router-dom";
import { useQuery, QueryClient } from "@tanstack/react-query";
import { getAllClients, handleDelete } from "../../Serwis/clientService";
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

const Clients = () => {
  const { data, isLoading } = useQuery(["clients"], getAllClients);

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
                        handleDelete(data.id)
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

export default Clients;
