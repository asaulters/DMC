import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Top.module.css';

import bathroom1 from '../../../../assets/Services/bathroom1.jpg';
import kitchen1 from '../../../../assets/Services/kitchen1.jpg';

const Top = () => {
  return (
    <div className={classes.topWrapper}>
        <div className={classes.topTop}>
            <h2>Lifestyle Tailored Construction & Full-Service Renovations</h2>
            <div className={classes.line}></div>
            <p>Congratulations on making the exciting decision to transform your home! Our clients in the Central Mississippi area have trusted us to do just that for more than 10 years. It’s your turn to get the <span>dream space you deserve</span>.</p>
        </div>
        <div className={classes.operateDiv1}>
            <div className={classes.operateWU}>
                <h2>How We Operate</h2>
                <p>Taking the plunge and deciding to turn your dated home into the modern, functional, beautiful space of your dreams is exciting, but it can also be daunting.<br/><br/>Our business is built around <span>taking the uncertainty out</span> of the home renovation and construction process. We <span>educate our customers</span> about their options, <span>develop plans based on their needs</span> and offer <span>realistic and honest</span> timelines and solutions.<br/><br/>Our goal is to ensure our clients get the <span>very best value</span> for their money, and a <span>gorgeous new home they can enjoy for many years to come</span>.</p>
            </div> 
            <img src={bathroom1} alt='kitchen' />
        </div>
        <div className={classes.designDiv}>
            <div className={classes.designWU}>
                <h2>Design</h2>
                <p>Your new space is all about you. The design and engagement process is the first step in a home renovation that delivers everything you’ve always dreamed about.<br/><br/>We start by really <span>listening to what you love, want and need</span>. Then we take all those ideas, put them on paper and develop a design plan that brings it all to life.</p>
                <button>
                    <NavLink to='/design' 
                        className={classes.NavLinks}>
                        Learn More
                    </NavLink>
                </button>
            </div> 
            <img src={kitchen1} alt='kitchen' />
        </div>

        
    </div>
  )
}

export default Top