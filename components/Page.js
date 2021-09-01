import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Footer from './Footer';

const useStyles = makeStyles((theme) => ({
  page: {
    display: 'grid',
    gridTemplateColumns: '1fr',
  },
}));

export default function Page(props) {
  const classses = useStyles();
  // const headerFooterHeight = '200px';
  return (
    <>
      <div
        className={classses.page}
        // style={{
        //   height: `calc(100vh - ${headerFooterHeight})`,
        // }}
      >
        {props.children}
      </div>
      <Footer />
    </>
  );
}
