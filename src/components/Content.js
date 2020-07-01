import React from 'react';
import Text from './Text';
import Title from './Title';
import Steper from './Steper';
import { Box, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    padding: '4%',
  },
  paragraph: {
    padding: '0 2% 5%',
  },
});
const Content = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box my={12} />

      <Title />
      <Text>Perfil</Text>
      <div className={classes.paragraph}>
        <Typography variant='body1' color='initial'>
          Curioso, creativo, proactivo, versátil, me encanta innovar y descubrir
          cosas nuevas, la música, lo místico, el café y las tecnologías.
        </Typography>
        <Box my={2} />
        <Typography variant='body1' color='initial'>
          De pequeño crecí entre ordenadores y siempre quise descubrir qué es lo
          que pasaba dentro de esas cajas silenciosas. Me interesé por el
          diseño, por la ilustración, por la salud y después por cómo unir todo
          esto en una sola filosofía; ahora estoy aprendiendo a escribir código
          en la consola, javascript, Node, React y Angular entre otros.
        </Typography>
        <Box my={2} />
        <Typography variant='body1' color='initial'>
          En los últimos años me he especializado en diseño final de interfaces
          de usuario y wordpress, lo que hace que pueda desarrollar nuevos
          conceptos de comunicación y gráfica gracias a la amplia gama de
          clientes y tecnologías, trabajando en equipo para plasmar las ideas
          del cliente final en un producto digital que perdura. No dejo de
          aprender cada día y eso me hace más creativo, dinámico e imaginativo.
          También hago trabajo de ilustración y retoque, especialmente como
          producto final para interfaces y páginas web.{' '}
        </Typography>
      </div>
      <Text>Portfolio</Text>
      <Steper />
    </div>
  );
};

export default Content;
