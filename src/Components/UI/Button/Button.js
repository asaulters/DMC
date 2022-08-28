import React from 'react';

import classes from './Button.module.css'

const Button = (props) => {
  return (
    <button>
        <h3>{props.message}</h3>
    </button>
  )
}

export default Button