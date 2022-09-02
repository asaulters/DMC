import React from 'react';

import classes from './Contact.module.css';
import contactImg from '../../../../assets/Home/contact-photo-1.png';

const Contact = () => {
  return (
    <div className={classes.contactWrapper}>
        <h2>How Can We Help Bring Your Vision To Life?</h2>
        <div className={classes.contactButton} id='contactButton'>Request a Consultation</div>
    </div>
  )
}

export default Contact