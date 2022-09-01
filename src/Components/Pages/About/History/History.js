import React from 'react';

import historyImg from '../../../../assets/About/bathroom1.jpg';
import historyImg2 from '../../../../assets/About/kitchen-2.jpg'

import classes from './History.module.css'

const History = () => {
  return (
    <div className={classes.historyWrapper}>
        <div className={classes.historyTop}>
            <h2>Lifestyle Tailored Construction & Full-Service Renovations</h2>
            <div className={classes.line}></div>
            <p>If you’re looking for reliable, experienced home remodeling, renovation contractors in <span>Central Mississippi</span> you’ve come to the right place. For more than 10 years, <span>Mack Construction Co</span> has served this community, providing high-quality service, lifestyle tailored construction, and full-service renovations.</p>
            <h4>From concept ro completion, we take care of it all.</h4>
        </div>
        <div className={classes.history1}>
            <img src={historyImg} alt='kitchen' />
            <div className={classes.historyWU}>
                <h2>What We Do</h2>
                <p>At <span>Mack Construction Co</span> we care about our clients, and we like to go home feeling good about the work the company delivers. We demonstrate this through our impeccable customer service, which goes above and beyond other providers in our industry.<br/><br/>We avoid competing on the grounds of price. Instead, <span>we take time to understand what our clients want to achieve and how we can make it happen</span>. We provide a general price range for good, better, and best scenarios.<br/><br/>When the client is ready, we measure the areas and provide design options, which incur a design fee that is credited against the complete project if accepted.</p>
            </div> 
        </div> 
        <div className={classes.history2}>
        <img src={historyImg2} alt='kitchen' />
            <div className={classes.historyWU2}>
                <h2>What We Do</h2>
                <p>At <span>Mack Construction Co</span> we care about our clients, and we like to go home feeling good about the work the company delivers. We demonstrate this through our impeccable customer service, which goes above and beyond other providers in our industry.<br/><br/>We avoid competing on the grounds of price. Instead, <span>we take time to understand what our clients want to achieve and how we can make it happen</span>. We provide a general price range for good, better, and best scenarios.<br/><br/>When the client is ready, we measure the areas and provide design options, which incur a design fee that is credited against the complete project if accepted.</p>
            </div> 
        </div> 
    </div>
  )
}

export default History