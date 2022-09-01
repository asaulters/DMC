import React from 'react';

import classes from './Button.module.css'

const Button = (props) => {
  return (
    <button>
        <h4>{props.message}</h4>
    </button>
  )
}

export default Button