import React from 'react';

import classes from './Top.module.css';

import bathroom1 from '../../../../assets/Services/bathroom1.jpg';
import kitchen1 from '../../../../assets/Services/kitchen1.jpg';

const Top = () => {
  return (
    <div className={classes.topWrapper}>
        <div className={classes.topTop}>
            <h2>Lifestyle Tailored Construction & Full-Service Renovations</h2>
            <div className={classes.line}></div>
            <p>Congratulations on making the exciting decision to transform your home! Our clients in the Central Mississippi area have trusted us to do just that for more than 10 years. It’s your turn to get the dream space you deserve.</p>
        </div>
        <div className={classes.operateDiv1}>
            <div className={classes.operateWU}>
                <h2>How We Operate</h2>
                <p>Taking the plunge and deciding to turn your dated home into the modern, functional, beautiful space of your dreams is exciting, but it can also be daunting.<br/><br/>Our business is built around taking the uncertainty out of the home renovation and construction process. We educate our customers about their options, develop plans based on their needs and offer realistic and honest timelines and solutions.<br/><br/>Our goal is to ensure our clients get the very best value for their money, and a gorgeous new home they can enjoy for many years to come.</p>
            </div> 
            <img src={bathroom1} alt='kitchen' />
        </div>
        <div className={classes.designDiv}>
            <div className={classes.designWU}>
                <h2>Design</h2>
                <p>Your new space is all about you. The design and engagement process is the first step in a home renovation that delivers everything you’ve always dreamed about.<br/><br/>We start by really listening to what you love, want and need. Then we take all those ideas, put them on paper and develop a design plan that brings it all to life.</p>
                <button>Learn More</button>
            </div> 
            <img src={kitchen1} alt='kitchen' />
        </div>

        
    </div>
  )
}

export default Top