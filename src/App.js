import React, { useContext } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { ThemeProvider, Container, Fab, Grid, Box } from '@material-ui/core';
import { mainContext } from './main-context';
import { lightTheme, darkTheme } from './theme';
import SideContent from './components/SideContent';
import Content from './components/Content';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

function App(props) {
  const main = useContext(mainContext);

  return (
    <ThemeProvider theme={main.dark ? darkTheme : lightTheme}>
      <div style={main.dark ? { background: '#232323', color: 'white' } : null}>
        <Navbar />
        <Hero />
        <Container maxWidth='lg'>
          <Grid container direction-xs-row-reverse='true' spacing={0}>
            <Box clone order={{ xs: 2, md: 1 }}>
              <Grid item xs={12} md={3}>
                <SideContent />
              </Grid>
            </Box>
            <Box clone order={{ xs: 1, md: 2 }}>
              <Grid item xs={12} md={9}>
                <Content />
              </Grid>
            </Box>
          </Grid>
        </Container>
        <ScrollTop {...props}>
          <Fab color='primary' size='small' aria-label='scroll back to top'>
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
