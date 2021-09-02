import React from 'react';
import { useRouter } from 'next/router';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { IconButton, Typography } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 90,
    background: `${theme.palette.primary.main}`,
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '3rem',
  },
  item: {
    height: 90,
    width: 100,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    '&:hover': {
      background: `${theme.palette.secondary.main}`,
      cursor: 'pointer',
    },
  },
  icon: {
    padding: 6,
  },
}));

export default function SocialBar() {
  const classes = useStyles();
  const router = useRouter();
  const items = [
    {
      name: 'About',
      href: '/about',
      icon: <InfoIcon fontSize="large" />,
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/Armstrongweldfab',
      icon: <FacebookIcon fontSize="large" />,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/armstrongweldfab/',
      icon: <InstagramIcon fontSize="large" />,
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: <MailOutlineIcon fontSize="large" />,
    },
  ];

  return (
    <div className={classes.root}>
      {items.map((item) => (
        <div
          className={classes.item}
          onClick={() => {
            if (['Contact', 'About'].includes(item.name)) {
              router.push(item.href);
            } else {
              window.location = item.href;
            }
          }}
        >
          <IconButton>{item.icon}</IconButton>
          <Typography variant="button">{item.name}</Typography>
        </div>
      ))}
    </div>
  );
}
