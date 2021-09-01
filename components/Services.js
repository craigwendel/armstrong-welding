import React from 'react';
import Image from 'next/image';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Typography } from '@material-ui/core';
import { services } from '../data/data';

const useStyles = makeStyles({
  root: {
    margin: '2rem 0rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 300px))',
    gridGap: '1rem',
    justifyContent: 'center',
  },
  title: {
    marginBottom: '1rem',
  },
  container: {
    height: 350,
    width: '100%',
    position: 'relative',
    display: 'grid',
    alignItems: 'center',
  },
  img: {
    zIndex: 0,
    opacity: '0.5',
  },
  text: {
    zIndex: 1,
    position: 'absolute',
    padding: '1rem',
  },
});

export default function Services() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography
        className={classes.title}
        align="center"
        color="secondary"
        variant="h3"
      >
        Services
      </Typography>
      <div className={classes.grid}>
        {services.map((s) => (
          <div className={classes.container}>
            <div className={classes.img}>
              <Image
                src={s.image}
                alt={s.title}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
            <div className={classes.text}>
              <Typography variant="h6">{s.title}</Typography>
              <Typography>{s.content}</Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
