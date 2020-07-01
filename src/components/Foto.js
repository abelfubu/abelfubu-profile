import React from 'react';
import FotoPerfil from '../images/PerfilSm.jpeg';
import { Zoom } from '@material-ui/core';

const Foto = () => {
  return (
    <Zoom in>
      <div style={{ textAlign: 'center' }}>
        <img
          style={{
            width: '80%',
            height: '80%',
            borderRadius: 500,
            margin: '22px auto 50px',
            boxShadow: '2px 2px 8px -4px rgba(0,0,0,0.75)',
          }}
          src={FotoPerfil}
          alt='Foto de Perfil Abel'
        />
      </div>
    </Zoom>
  );
};

export default Foto;
