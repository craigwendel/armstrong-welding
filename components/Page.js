import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navigation from './Navigation';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: '200px 1fr',
    },
  },
  page: {
    marginTop: 70,
    padding: '1rem',
    minHeight: '100%',
  },
}));

export default function Page(props) {
  const classses = useStyles();
  return (
    <div className={classses.container}>
      <Navigation />
      <div className={classses.page}>
        {props.children}
        {/* <Footer /> */}
      </div>
    </div>
  );
}
