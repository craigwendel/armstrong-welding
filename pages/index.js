import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

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

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <img
          className={classes.info}
          src="/static/armstrong-logo.png"
          alt="armstrong welding logo"
        />
        <Typography className={classes.info} variant="h6">
          Our website is currently a work in progress but feel free to request a
          quote or more information below!
        </Typography>
        <Typography variant="h5">Request a Quote / Information</Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Full Name"
            name="name"
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
            autoComplete="tel"
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="comments"
            label="Comments"
            name="comments"
            multiline
            rows={6}
            defaultValue="Tell us more about your project..."
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
}
