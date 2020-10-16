import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  info: {
    marginBottom: theme.spacing(4),
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Home() {
  const classes = useStyles();
  const [state, setState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const handleChange = event => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const handleSubmit = () => {
    console.log('THE STATE', state);
    fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: state.name,
        email: state.email,
        phone: state.phone,
        message: state.message,
      }),
    });
  };

  return (
    <Container component="main" maxWidth="sm">
      <div className={classes.paper}>
        <img
          className={classes.info}
          src="/static/armstrong-logo.png"
          alt="armstrong welding logo"
        />
        <Typography align="center" variant="h4">
          Joseph Armstrong
        </Typography>
        <Typography variant="h6">512.525.3867</Typography>
        <Typography className={classes.info} variant="h6">
          armstrongweldfab@gmail.com
        </Typography>
        <Typography className={classes.info} variant="subtitle">
          Our website is currently a work in progress but feel free to request a
          quote or more information below!
        </Typography>
        <Typography variant="h6">Request a Quote / Information</Typography>
        <div className={classes.form}>
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
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </div>
    </Container>
  );
}
