import React from 'react'

import HeroImg from '../../../assets/Home/heroHome1.jpg';
import kitchenPort from '../../../assets/Home/kitchen-interior.jpg';

import classes from './Home.module.css'
import Button from '../../UI/Button/Button'
import Testimonials from './Testimonials/Testimonials';
import Services from './Services/Services'

const Home = () => {
  return (
    <div className={classes.homeWrapper}>
      <div className={classes.heroDiv}>
        <img src={HeroImg} alt='Constructed Home' />
        <div className={classes.hero_wu}>
          <h1>Residential and Commercial General Contractors</h1>
          <h6>Proudly Serving Homeowners and Businesses in Mississippi for over 10 years.  </h6>
          <Button message='Request An Estimate' />
        </div>        
      </div>   

      <div className={classes.servicesDiv}>
        <h1>Services We Offer</h1>
        <p>Here at ?DMC?, we are family-owned residential and commercial contractors. We specialize in renovations and new build. Since 2012 we've been building a reputation as a reliable, knowledgeable, and client-focues general builder, renovation expert, and home design contractor.</p><br/><br/>
        <p>We're still the number one choice for homeowners looking to work with and established companyu that still values a personal touch and has pride in their work. We always go the extra mile to make your vision come to life.</p>
        <Button message='Learn More' />
      </div> 

      <div className={classes.portfolio_testimonials}>
        <div className={classes.portfolio}>
          <img src={kitchenPort} alt='kitchen picture' />
          <div className={classes.galleryButton}>View Project Galleries</div>
        </div>
        <div className={classes.testimonial}>
          <Testimonials />
        </div>
      </div>

      <div className={classes.servicesDiv}>
        <Services />
      </div>

      </div>
  )
}

export default Home