import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  link: {
    fontSize: '1.25rem',
    marginBottom: theme.spacing(4),
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
  const handleChange = event => {
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

  const handleOnSubmit = async e => {
    e.preventDefault();
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));
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
    <Container component="main" maxWidth="sm">
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={status.submitted}
        autoHideDuration={4000}
        onClose={() =>
          setStatus(prevStatus => ({ ...prevStatus, submitted: false }))
        }
      >
        <Alert severity="success">
          Thanks for your submission! We'll be in touch soon!
        </Alert>
      </Snackbar>
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
        <Link href="mailto:armstrongweldfab@gmail.com" className={classes.link}>
          armstrongweldfab@gmail.com
        </Link>
        <Typography className={classes.info} variant="subtitle1">
          Our website is currently a work in progress but feel free to request a
          quote or more information below!
        </Typography>
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
      </div>
    </Container>
  );
}
