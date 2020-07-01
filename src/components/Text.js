import React from 'react';

const Text = props => {
  return (
    <div>
      <div
        style={{
          position: 'relative',
          margin: '0 10px 0 30px',
          width: '70%',
          background: '#f4d35e',
          height: '8px',
          top: 60,
          //   marginTop: '50px',
          borderRadius: 20,
          zIndex: 20,
        }}></div>
      <svg
        style={{ width: '100%', zIndex: 50, position: 'relative' }}
        viewBox='0 0 10 2'>
        <text
          x='5'
          y='1'
          textAnchor='middle'
          fontSize='1'
          fill='#828282'
          strokeWidth='.015'
          stroke='#8d99ae'
          fontFamily='Shadows Into Light Two'>
          {props.children}
        </text>
      </svg>
    </div>
  );
};

export default Text;
