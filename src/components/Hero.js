import React from 'react';
import { Grid, makeStyles, Typography, Box } from '@material-ui/core';
import HeroSection from '../images/HeroSection.png';
import Logo from '../images/Logo3.png';

const useStyles = makeStyles({
  img: {
    width: '80%;',
    marginTop: '10%',
  },
  logo: {
    width: 500,
    maxWidth: '85%',
  },
  grid: {
    padding: '0 5%',
    textAlign: 'center',
    color: 'grey',
  },

  center: {
    textAlign: 'center',
  },
  background: {
    background: '#f4f4f4',
    backgroundImage:
      'url("https://www.transparenttextures.com/patterns/diagmonds-light.png")',
  },
});

const Hero = () => {
  const classes = useStyles();
  return (
    <Grid
      className={classes.background}
      alignContent='center'
      alignItems='center'
      justify='center'
      container>
      <Box clone order={{ xs: 2, md: 1 }}>
        <Grid className={classes.grid} item xs={12} md={6}>
          <img className={classes.logo} src={Logo} alt='' />
          <Typography variant='subtitle2'>
            Desarrollo de aplicaciones web y interfaces de usuario.
          </Typography>
          <Box my={6} />
        </Grid>
      </Box>
      <Box clone order={{ xs: 1, md: 2 }}>
        <Grid className={classes.center} item xs={12} md={6}>
          <img
            className={classes.img}
            src={HeroSection}
            alt='Code Hero Section'
          />
        </Grid>
      </Box>
    </Grid>
  );
};

export default Hero;
