import React from 'react';
import Image from 'next/image';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Typography, Button } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    padding: '3rem',
    display: 'flex',
    alignItems: 'center',
    margin: '2rem 0rem',
  },
  image: {
    width: '100%',
    marginRight: '2rem',
  },
  title: {
    marginBottom: '1rem',
  },
  button: {
    margin: '2rem 0rem',
  },
});

export default function About() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.image}>
        <Image src="/welder-usa.jpg" height={300} width={200} />
      </div>
      <div>
        <Typography variant="h4" color="secondary" className={classes.title}>
          About Us
        </Typography>
        <Typography>
          As a veteran owned and operated company, Armstong Welding and
          Fabrication leads the way in custom fabrication, welding, and metal
          repair to clients in Houston and the surrounding areas. We are
          comitted to providing the highest standard of quality workmanship and
          attention to detail required to surpass your expectations.
        </Typography>
        <Button
          className={classes.button}
          color="secondary"
          variant="contained"
        >
          Request A Quote
        </Button>
      </div>
    </div>
  );
}
