import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Services.module.css';
import ServicesData from './services.json';
import Button from '../../../UI/Button/Button';

import homePic from '../../../../assets/Home/living-room1.webp';
import kitchenPic from '../../../../assets/Home/kitchen1.webp';
import bathroomPic from '../../../../assets/Home//bathroom1.webp';
import roofPic from '../../../../assets/Home/roof1.jpg';
import garagePic from '../../../../assets/Home/garage1.jpg';
import newBuildPic from '../../../../assets/Home/newBuild1.jpg';


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
                    <p>{ServicesData[0].shortDesc}</p>
                    <button message='Learn More'>
                        <NavLink to='/services'>Learn More</NavLink>
                    </button>
                </div>
            </div>
            <div className={classes.service2}>
                <div className={classes.serviceTop}>
                    <img src={kitchenPic} alt="home pic"/>
                    <h2>{ServicesData[1].service}</h2>
                </div>
                <div className={classes.serviceWU}>
                    <p>{ServicesData[1].shortDesc}</p>
                    <button message='Learn More'>
                        <NavLink to='/services'>Learn More</NavLink>
                    </button>
                </div>
            </div>
            <div className={classes.service3}>
                <div className={classes.serviceTop}>
                    <img src={bathroomPic} alt="home pic"/>
                    <h2>{ServicesData[2].service}</h2>
                </div>
                <div className={classes.serviceWU}>
                    <p>{ServicesData[2].shortDesc}</p>
                    <button message='Learn More'>
                        <NavLink to='/services'>Learn More</NavLink>
                    </button>
                </div>
            </div>
            <div className={classes.service4}>
                <div className={classes.serviceTop}>
                    <img src={roofPic} alt="home pic"/>
                    <h2>{ServicesData[3].service}</h2>
                </div>
                <div className={classes.serviceWU}>
                    <p>{ServicesData[3].shortDesc}</p>
                    <button message='Learn More'>
                        <NavLink to='/services'>Learn More</NavLink>
                    </button>
                </div>
            </div>
            <div className={classes.service5}>
                <div className={classes.serviceTop}>
                    <img src={garagePic} alt="home pic"/>
                    <h2>{ServicesData[4].service}</h2>
                </div>
                <div className={classes.serviceWU}>
                    <p>{ServicesData[4].shortDesc}</p>
                    <button message='Learn More'>
                        <NavLink to='/services'>Learn More</NavLink>
                    </button>
                </div>
            </div>
            <div className={classes.service6}>
                <div className={classes.serviceTop}>
                    <img src={newBuildPic} alt="home pic"/>
                    <h2>{ServicesData[5].service}</h2>
                </div>
                <div className={classes.serviceWU}>
                    <p>{ServicesData[5].shortDesc}</p>
                    <button message='Learn More'>
                        <NavLink to='/services'>Learn More</NavLink>
                    </button>
                </div>
            </div>
        </div>
        <div className={classes.pusher}></div>
    </div>
  )
}

export default Services