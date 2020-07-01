import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { useScrollTrigger, Typography, Button } from '@material-ui/core';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { mainContext } from '../main-context';
import grey from '@material-ui/core/colors/grey';
import Logo from '../images/Logo3.png';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  grey: {
    background: grey[800],
  },
  logo: {
    maxWidth: 125,
  },
  none: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  button: {
    margin: '0 32px',
  },
}));

export default function SearchAppBar(props) {
  const classes = useStyles();
  const main = useContext(mainContext);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleDark = () => {
    main.update({ ...main, dark: !main.dark });
  };
  return (
    <div id='top' className={classes.root}>
      <AppBar
        style={{ transition: 'all 0.5s ease-out' }}
        position='fixed'
        className={!trigger ? 'MuiAppBar-colorTransparent' : classes.grey}
        elevation={!trigger ? 0 : 2}>
        <Toolbar>
          <img
            className={!trigger ? classes.none : classes.logo}
            src={Logo}
            alt='Logo'
          />
          <div className={classes.title}></div>
          <Button className={classes.button} color='primary'>
            Blog
          </Button>
          <IconButton
            edge='start'
            className={classes.menuButton}
            onClick={handleDark}
            color='primary'
            aria-label='open drawer'>
            {main.dark ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
