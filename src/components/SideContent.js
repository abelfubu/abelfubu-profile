import React from 'react';
import Foto from './Foto';
import { Divider, Typography, Box } from '@material-ui/core';
import Contact from './Contact';
import Skills from './Skills';
import Platforms from './Platforms';
const SideContent = () => {
  return (
    <div style={{ padding: '85px 10% 0' }}>
      <Foto />
      <Divider />
      <Box my={2}>
        <Typography variant='h5' color='initial' align='left'>
          Contacto
        </Typography>
      </Box>
      <Contact email='abelfubu@gmail.com' tel='617 36 61 35' />
      <Divider />
      <Box my={2}>
        <Typography variant='h5' color='initial' align='left'>
          Skills
        </Typography>
      </Box>
      <Skills />
      <Box my={2}></Box>
      <Divider />
      <Box my={2}>
        <Typography variant='h5' color='initial' align='left'>
          Plataformas
        </Typography>
      </Box>
      <Platforms />
    </div>
  );
};

export default SideContent;
