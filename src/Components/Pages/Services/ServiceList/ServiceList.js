import React from 'react';

import classes from './ServiceList.module.css';
import ServicesData from '../../Home/Services/services.json';

import homePic from '../../../../assets/Home/living-room1.webp';
import kitchenPic from '../../../../assets/Home/kitchen1.webp';
import bathroomPic from '../../../../assets/Home//bathroom1.webp';
import roofPic from '../../../../assets/Home/roof1.jpg';
import garagePic from '../../../../assets/Home/garage1.jpg';
import newBuildPic from '../../../../assets/Home/newBuild1.jpg';


const ServiceList = () => {
  return (
    <div className={classes.servicesWrapper}>
        <div className={classes.servicesWU}>
            <h1>Our Home Remodeling and Renovation Services</h1>
            <div></div>
            <p><br/>We are proud to offer full-service interior and exterior home remodeling and renovation services with a special emphasis on acting with integrity. Each project is personally overseen to ensure we achieve the highest levels of accuracy and quality every time.<br/></p>
        </div>
        <div className={classes.servicesList}>
            <div className={classes.service1}>
                <div className={classes.serviceTop1}>
                    <img src={homePic} alt="home pic"/>
                    <h2>{ServicesData[0].service}</h2>
                </div>
                <div className={classes.serviceWU1}>
                    <p>{ServicesData[0].description}</p>
                </div>
            </div>
            <div className={classes.service2}>
                <div className={classes.serviceTop2}>
                    <img src={kitchenPic} alt="home pic"/>
                    <h2>{ServicesData[1].service}</h2>
                </div>
                <div className={classes.serviceWU2}>
                    <p>{ServicesData[1].description}</p>
                </div>
            </div>
            <div className={classes.service3}>
                <div className={classes.serviceTop1}>
                    <img src={bathroomPic} alt="home pic"/>
                    <h2>{ServicesData[2].service}</h2>
                </div>
                <div className={classes.serviceWU1}>
                    <p>{ServicesData[2].description}</p>
                </div>
            </div>
            <div className={classes.service4}>
                <div className={classes.serviceTop2}>
                    <img src={roofPic} alt="home pic"/>
                    <h2>{ServicesData[3].service}</h2>
                </div>
                <div className={classes.serviceWU2}>
                    <p>{ServicesData[3].description}</p>
                </div>
            </div>
            <div className={classes.service5}>
                <div className={classes.serviceTop1}>
                    <img src={garagePic} alt="home pic"/>
                    <h2>{ServicesData[4].service}</h2>
                </div>
                <div className={classes.serviceWU1}>
                    <p>{ServicesData[4].description}</p>
                </div>
            </div>
            <div className={classes.service6}>
                <div className={classes.serviceTop2}>
                    <img src={newBuildPic} alt="home pic"/>
                    <h2>{ServicesData[5].service}</h2>
                </div>
                <div className={classes.serviceWU2}>
                    <p>{ServicesData[5].description}</p>
                </div>
            </div>
        </div>
        <div className={classes.pusher}></div>
    </div>
  )
}

export default ServiceList