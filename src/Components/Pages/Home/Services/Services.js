import React from 'react';

import classes from './Services.module.css';
import ServicesData from './services.json';
import Button from '../../../UI/Button/Button';

import homePic from '../../../../assets/Home/living-room1.webp';
import kitchenPic from '../../../../assets/Home/kitchen1.webp';
import bathroomPic from '../../../../assets/Home//bathroom1.webp';


const Services = () => {
  return (
    <div className={classes.servicesWrapper}>
        <div className={classes.servicesWU}>
            <h1>Our Home Remodeling and Renovation Services</h1>
            <p><br/>We are proud to offer full-service interior and exterior home remodeling and renovation services with a special emphasis on acting with integrity. Each project is personally overseen to ensure we achieve the highest levels of accuracy and quality every time.<br/></p>
        </div>
        <div className={classes.servicesList}>
            <div className={classes.service1}>
                <div className={classes.serviceTop}>
                    <img src={homePic} alt="home pic"/>
                    <h2>{ServicesData[0].service}</h2>
                </div>
                <div className={classes.serviceWU}>
                    <p>{ServicesData[0].description}</p>
                    <Button message='Learn More' />
                </div>
            </div>
            <div className={classes.service2}>
                <div className={classes.serviceTop}>
                    <img src={kitchenPic} alt="home pic"/>
                    <h2>{ServicesData[1].service}</h2>
                </div>
                <div className={classes.serviceWU}>
                    <p>{ServicesData[1].description}</p>
                    <Button message='Learn More' />
                </div>
            </div>
            <div className={classes.service3}>
                <div className={classes.serviceTop}>
                    <img src={bathroomPic} alt="home pic"/>
                    <h2>{ServicesData[2].service}</h2>
                </div>
                <div className={classes.serviceWU}>
                    <p>{ServicesData[2].description}</p>
                    <Button message='Learn More' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services