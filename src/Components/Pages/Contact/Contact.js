import React, {useState, useRef} from 'react';
import emailjs from 'emailjs-com';

import classes from './Contact.module.css';

import HeroImg from '../../../assets/Home/heroHome1.jpg';
import consultImg from '../../../assets/Contact/constructionWorker1.png';

const Contact = () => {
  const form = useRef();

  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service1', 'template1', form.current, 'Frzd6WBD0sB9revoS')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  return (
    <div className={classes.contactWrapper}>
        <div className={classes.heroDiv}>
            <img src={HeroImg} alt='Constructed Home' />
            <div className={classes.hero_wu}>
            <h1>Contact Us</h1>
        </div>        
      </div> 
      
      <div className={classes.contactTop}>
        <h2>Request a Free Consultation</h2>
        <div className={classes.line}></div>
        <p>We would love to hear from you and see if Mack Construction Co is a good fit for your project. Please call our office at (601) 946-5386 or fill out the form below and we will get back to you as soon as possible.</p>

      </div>

        <div className={classes.contactFormDiv}>
           <form type='submit' ref={form} onSubmit={sendEmail}>
                <input type='text' name='Name' placeholder='Name*' required />
                <input type='text' name='Email' placeholder='Email*' required />
                <input type='text' name='Phone' placeholder='Phone*' required />
                <select name='Time' placeholder='Timeframe*' required>
                    <option disabled hidden selected>Timeframe*</option>
                    <option value='ASAP'>As Soon As Possible</option>
                    <option value='1to3'>One to Three Months</option>
                    <option value='<6'>Within Six Months</option>
                    <option value='<12'>Before This Time Next Year</option>
                    <option value='12+'>Over A Year From Now</option>
                </select>
                <select name='Type' placeholder='Timeframe*' required>
                    <option disabled hidden selected>Type of Project*</option>
                    <option value='Major'>Major Construction</option>
                    <option value='Minor'>Minor Construction</option>
                </select>
                <select name='Area' required>
                    <option disabled hidden selected placeholder='Area of Work*'>Area of Work*</option>
                    <option value='Interior Reno'>Interior Renovation</option>
                    <option value='12+'>New Build</option>
                    <option value='Ext'>Exterior Build</option>
                    <option value='1to3'>Kitchen</option>
                    <option value='<6'>Bathroom</option>
                    <option value='<12'>Roofing</option>
                </select>
                <textarea name='Description' placeholder='Tell Us About Your Project*' required cols='10' rows='10'/>
                <button type='submit' >Submit</button>
           </form> 
        </div>       



    </div>
  )
}

export default Contact