import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '10%',
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    minHeight: '100%',
    background: '#f4d35e',
    zIndex: -1,
  },
});
const Amarillo = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <p></p>
    </div>
  );
};

export default Amarillo;
