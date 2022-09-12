import React from 'react';
import { NavLink } from 'react-router-dom';

import HeroImg from '../../../assets/Home/heroHome1.jpg';
import kitchenPort from '../../../assets/Home/kitchen-interior.jpg';

import classes from './Home.module.css'
import Button from '../../UI/Button/Button'
import Testimonials from './Testimonials/Testimonials';
import Services from './Services/Services'
import Contact from './Contact/Contact';

const Home = () => {


  return (
    <div className={classes.homeWrapper}>
      <div className={classes.heroDiv}>
        <img src={HeroImg} alt='Constructed Home' />
        <div className={classes.hero_wu}>
          <h1>Transform your house into a home you're proud of.</h1>
          <h6>Proudly Serving Homeowners and Businesses in Mississippi for over 10 years.  </h6>
          <button message='Request an Estimate'>
            <NavLink to='/contact' className={classes.NavLinks}>
              Request an Estimate
            </NavLink>
          </button>
        </div>        
      </div>   

      <div className={classes.aboutDiv}>
        <h1>We specialize in premium-quality home remodeling and home renovation.</h1><br></br>
        <p>Here at <span>Mack Construction Co</span>, we are family-owned residential  contractors. We specialize in <span>renovations and new builds</span>. Since 2012 we've been building a reputation as a <span>reliable, knowledgeable, and client-focues general builder, renovation expert, and home design contractor</span>.</p>
        <p>We're still the number one choice for homeowners looking to work with and established company that still values a <span>personal touch</span> and has <span>pride in their work</span>. We always go the extra mile to make your vision come to life.</p>
        <h3>We’re ready to help you make your vision of a beautiful home come to life with the expertise, guidance, skill, and integrity your home remodeling project deserves.</h3>
        <button className={classes.servicesDivButton2} message='About Us'>
          <NavLink to='/about' 
            className={classes.NavLinks}>
              About Us
          </NavLink>
        </button>
      </div> 

      <div className={classes.portfolio_testimonials}>
        <div className={classes.portfolio}>
          <img src={kitchenPort} alt='kitchen picture' />
          <div className={classes.galleryButton}>
            <NavLink to='/' 
              className={classes.NavLinks}>
                View Project Galleries
            </NavLink>
          </div>
        </div>
        <div className={classes.testimonial}>
          <Testimonials />
        </div>
      </div>

      <div className={classes.servicesDiv}>
        <Services />
      </div>

      <div className={classes.contactDiv}>
        <Contact />
      </div>

      </div>
  )
}

export default Home