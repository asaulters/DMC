import React from 'react';

import HeroImg from '../../../assets/Home/heroHome1.jpg';


import classes from './About.module.css';
import History from './History/History';
import KnowMore from './KnowMore/KnowMore';
import Contact from '../Home/Contact/Contact'

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
    <div className={classes.knowMoreDiv}>
        <KnowMore />
    </div>
    <Contact />
    </div>
  )
}

export default About