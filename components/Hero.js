import React from 'react';
import Image from 'next/image';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    marginBottom: '3rem',
  },
  title: {
    marginBottom: '1rem',
  },
  container: {
    height: 500,
    width: '100%',
    position: 'relative',
    display: 'grid',
    alignItems: 'center',
    justifyItems: 'center',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    zIndex: 2,
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

export default function Hero() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.img}>
          <Image
            src="/welder-sparks.jpg"
            alt="welder welding on metal alloy"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className={classes.text}>
          <div className={classes.logo}>
            <Image src="/website-As.png" height={100} width={200} />
            <Image src="/armstrong-tagline.png" height={125} width={500} />
          </div>

          <Typography align="center" className={classes.title} variant="h3">
            Custom Fabrication and Welding Services
          </Typography>
          <Typography align="center" variant="h4">
            512.525.3867
          </Typography>
        </div>
      </div>
    </div>
  );
}
