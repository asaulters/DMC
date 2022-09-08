import React from 'react';

import classes from './Services.module.css';
import Top from './Top/Top';
import ServiceList from '../../Pages/Services/ServiceList/ServiceList';
import Contact from '../../Pages/Home/Contact/Contact'

import HeroImg from '../../../assets/Home/heroHome1.jpg';

const Services = () => {
  return (
    <div className={classes.servicesWrapper}>
        <div className={classes.heroDiv}>
            <img src={HeroImg} alt='Constructed Home' />
            <div className={classes.hero_wu}>
            <h1>Services</h1>
        </div>        
      </div> 
    <div className={classes.topDiv}>
        <Top />
    </div>
    <div className={classes.serviceListDiv}>
        <ServiceList />
    </div>  
    <div className={classes.contactDiv}>
        <Contact />
    </div>


    </div>
  )
}

export default Services