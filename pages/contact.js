import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import RequestForm from '../components/RequestForm';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(2),
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
}));

export default function Contact() {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="sm">
      <div className={classes.paper}>
        <Typography align="center" variant="h4">
          Joseph Armstrong
        </Typography>
        <Typography variant="h6">512.525.3867</Typography>
        <Link href="mailto:armstrongweldfab@gmail.com" className={classes.link}>
          armstrongweldfab@gmail.com
        </Link>
        <RequestForm />
      </div>
    </Container>
  );
}
