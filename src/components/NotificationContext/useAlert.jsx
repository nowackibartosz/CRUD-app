import * as React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export const useAlert = () => {
    const history = useHistory()
    const [isOpen, setIsOpen] = React.useState(false);
    const [message, setMessage] = React.useState("");
    const [route, setRoute] = React.useState("");
    const [actionLabel, setActionLabel] = React.useState("");

  const openAlert = ({message, route, actionLabel }) => {
      setIsOpen(true);
      setMessage(message);
      setRoute(route);
      setActionLabel(actionLabel)
  };

  const closeAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setIsOpen(false);
  };

  const action = (
    <React.Fragment>
          {route && <Button color="secondary" size="small" onClick={() => history.push(route)}>
              {actionLabel}
          </Button>}
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={closeAlert}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Button onClick={openAlert}>Open simple snackbar</Button>
      <Snackbar
        open={isOpen}
        autoHideDuration={6000}
        onClose={closeAlert}
              message={message}
              
        action={action}
      />
    </div>
  );
}