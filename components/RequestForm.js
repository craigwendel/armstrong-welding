import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField, Typography } from '@material-ui/core';
import SnackbarAlert from './SnackbarAlert';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function RequestForm() {
  const classes = useStyles();
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [state, setState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setState({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    const res = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(state),
    });
    const text = await res.text();
    handleResponse(res.status, text);
  };

  return (
    <>
      <SnackbarAlert
        open={status.submitted}
        severity="success"
        message="Thanks for your submission! We'll be in touch soon!"
        onClose={() =>
          setStatus((prevStatus) => ({ ...prevStatus, submitted: false }))
        }
      />
      <Typography variant="h6">Request a Quote / Information</Typography>
      <form className={classes.form} onSubmit={handleOnSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="name"
          label="Full Name"
          name="name"
          value={state.name}
          onChange={handleChange}
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          type="email"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          value={state.email}
          onChange={handleChange}
          autoComplete="email"
        />
        <TextField
          variant="outlined"
          margin="normal"
          type="tel"
          required
          fullWidth
          id="phone"
          label="Phone"
          name="phone"
          value={state.phone}
          onChange={handleChange}
          autoComplete="tel"
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="message"
          label="Message"
          name="message"
          value={state.message}
          onChange={handleChange}
          multiline
          rows={6}
          // defaultValue="Tell us more about your project..."
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </>
  );
}
