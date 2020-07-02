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
          top: 80,
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
          fontSize='0.7'
          fill='none'
          strokeWidth='.005'
          stroke='#8d99ae'
          fontFamily='Open Sans'>
          {props.children}
        </text>
      </svg>
    </div>
  );
};

export default Text;
