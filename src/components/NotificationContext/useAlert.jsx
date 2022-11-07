import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export const useAlert =() => {
  const [isOpen, setIsOpen] = React.useState(false);
    const [message, setMessage] = React.useState("");
    

  const openAlert = ({message}) => {
      setIsOpen(true);
      setMessage(message)
  };

  const closeAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setIsOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={closeAlert}>
        UNDO
      </Button>
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