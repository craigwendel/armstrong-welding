import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { AppBar, Typography, Link } from '@material-ui/core';
import SocialLinks from './SocialLinks';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    padding: '2rem',
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontWeight: 500,
    margin: '0.1rem',
  },
  link: {
    color: '#ffffffcc',
    marginTop: '1rem',
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
  },
  mobileTag: {
    display: 'none',
    [theme.breakpoints.down('xs')]: {
      marginTop: '2rem',
      color: '#ffffffcc',
      display: 'block',
    },
  },
  desktopTag: {
    display: 'block',
    marginTop: '1rem',
    color: '#ffffffcc',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
}));

export default function Footer() {
  const classes = useStyles();
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const hours = new Array(1, 2, 3, 4, 5);

  return (
    <AppBar
      position="absolute"
      color="primary"
      classes={{ root: classes.root }}
    >
      <div className={classes.column}>
        <Typography variant="h6" color="secondary" className={classes.title}>
          {'Armstrong Welding & Fabrication'}
        </Typography>
        <Typography>512.525.3867</Typography>
        <Typography>armstrongweldfab@gmail.com</Typography>
        <SocialLinks color="fff" email />
        {/* <Typography className={classes.title} >
          {'Copyright © '}
          {new Date().getFullYear()}
        </Typography> */}
        <Typography
          variant="body2"
          className={classes.desktopTag}
          align="center"
        >
          {'Site created by '}
          <Link
            color="inherit"
            target="_blank"
            rel="noopener"
            href="https://craigawendel.com"
          >
            Craig Wendel
          </Link>
        </Typography>
      </div>
      <div className={classes.column}>
        <Typography className={classes.title} color="secondary" variant="h6">
          Hours
        </Typography>
        <div className={classes.flex}>
          <div className={classes.column}>
            {days.map((d) => (
              <Typography key={d}>{d}</Typography>
            ))}
          </div>
          <div className={classes.column} style={{ marginLeft: '1rem' }}>
            {hours.map((h) => (
              <Typography key={h}>{'8:00 AM	– 5:00 PM'}</Typography>
            ))}
          </div>
        </div>
        <Typography variant="body2" className={classes.link}>
          After hours service available
        </Typography>
        <Typography
          variant="body2"
          className={classes.mobileTag}
          align="center"
        >
          {'Site created by '}
          <Link
            color="inherit"
            target="_blank"
            rel="noopener"
            href="https://craigawendel.com"
          >
            Craig Wendel
          </Link>
        </Typography>
      </div>
    </AppBar>
  );
}
