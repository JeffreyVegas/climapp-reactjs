import React from 'react';
import './Error.css';

const Error = ({errors}) => {
    return (
      <>
        {errors.map((err) => (
          <p key={err.mensaje} className='Error__P'> * {err.mensaje}</p>
        ))}
      </>
    );
};

export default Error;