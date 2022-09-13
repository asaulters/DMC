import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Contact.module.css';
import contactImg from '../../../../assets/Home/contact-photo-1.png';

const Contact = () => {
  return (
    <div className={classes.contactWrapper}>
        <h2>How Can We Help Bring Your Vision To Life?</h2>
        <div className={classes.contactButton} 
          id='contactButton'>
          <NavLink to='/contact'
            className={classes.NavLinks}>
              Request a Consultation
            </NavLink>
          
        </div>
    </div>
  )
}

export default Contact