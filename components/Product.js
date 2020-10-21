import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr 400px',
    alignItems: 'center',
  },
  img: {},
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

export default function Product() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img
        className={classes.img}
        src="/static/placeholder.png"
        alt="placeholder image"
      />
      <div className={classes.details}>
        <Typography variant="h5">Pipe H-Brace</Typography>
        <Typography variant="h6">$140</Typography>
        <Typography variant="subtitle1">
          Description: Brace is 84 inches tall up to the caps and 48 inches
          in-between. Made out of 2 7/8" pipe. Tractor Supply sells these
          starting at $169
        </Typography>
        <Button variant="contained" color="primary">
          Add to Quote
        </Button>
      </div>
    </div>
  );
}
