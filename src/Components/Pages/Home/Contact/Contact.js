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
            <input required type='text' placeholder='Name*' name='name'/>
            <input required type='text' placeholder='Email*' name='email' />
            <input type='text' placeholder='Phone Number' name='phone'/>
            <input type='text' placeholder='Best Time to Contact' name='time' />
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