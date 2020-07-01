import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
const useStyle = makeStyles({
  root: {
    // border: '10px solid #232323',
    padding: 24,
    textAlign: 'center',
    margin: '0 0 10px',
    borderRadius: 10,
    boxShadow: 'inset 2px 2px 8px -4px rgba(0,0,0,0.75)',
    background: '#f4f4f4',
    color: '#828282',
  },
  sub: {
    padding: '15px',
    textAlign: 'center',
    margin: '16px auto auto',
    // background: 'white',
    zIndex: 100,
    borderRadius: 15,
    width: '65%',
    // boxShadow: '2px 2px 8px -4px rgba(0,0,0,0.75)',
  },
});
const Title = () => {
  const classes = useStyle();
  return (
    <div>
      <div className={classes.root}>
        <Typography variant='h3' color='initial'>
          ABEL DE LA FUENTE
        </Typography>

        <div className={classes.sub}>
          <Typography variant='h5' color='initial'>
            WEB DEVELOPER/UI/UX
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Title;
