import React from 'react';
import FotoPerfil from '../images/PerfilSm.jpeg';
import { Zoom } from '@material-ui/core';

const Foto = () => {
  return (
    <Zoom in>
      <div style={{ textAlign: 'center' }}>
        <img
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 500,
            margin: '22px auto 50px',
          }}
          src={FotoPerfil}
          alt='Foto de Perfil Abel'
        />
      </div>
    </Zoom>
  );
};

export default Foto;
