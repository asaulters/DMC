import React from 'react';

import classes from './Contact.module.css';

const Contact = () => {
  return (
    <div className={classes.contactWrapper}>
        <div className={classes.contactTop}>
            <h1>Request an Estimate</h1>
            <p>Fill out the form below to request an estimate.*</p>
        </div>
        <form>
            <input 
              required 
              type='text' 
              placeholder='Name*' 
              name='name'
              className={classes.inputName}  
              />
            <input  
              required 
              type='text' 
              placeholder='Email*' 
              name='email' 
              className={classes.inputEmail}  
              />
            <input 
              type='text' 
              placeholder='Phone Number' 
              name='phone'
              className={classes.inputNumber}  
              />
            <input type='text'  
              placeholder='Best Time to Contact' 
              name='time' 
              className={classes.inputTime}  
              />
            <textarea 
                type='text' 
                placeholder='Tell us about your project!*'
                name='message'
                required
                cols='50'
                rows='10'
                />
            <button>Request an Estimate</button>       
        </form>

    </div>
  )
}

export default Contact