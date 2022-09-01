import React from 'react';

import HeroImg from '../../../assets/Home/heroHome1.jpg';
import historyImg from '../../../assets/About/kitchen-1.jpg';

import classes from './About.module.css';
import History from './History/History'

const About = () => {
  return (
    <div className={classes.aboutWrapper}>
      <div className={classes.heroDiv}>
        <img src={HeroImg} alt='Constructed Home' />
        <div className={classes.hero_wu}>
          <h1>About Us</h1>

        </div>        
      </div> 
    
    <div className={classes.historyDiv}>
        <History />
    </div>

    </div>
  )
}

export default About