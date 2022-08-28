import React from 'react';

import classes from './Testimonials.module.css';
import star from '../../../../assets/Home/25533.jpg';
import fourStar from '../../../../assets/Home/4-star-1'
import fiveStar from '../../../../assets/Home/5-star-2'

const Testimonials = (props) => {
  return (
    <div className={classes.testimonialWrapper}>
        <div className={classes.stars}>
            {/* <img src={fourStar} alt='star' /> */}
            <img src={fiveStar} alt='star' />

        </div>
        <h2>Honestly could not be happier with how everything turned out!</h2>
        <p>Absolutely love my new master bath! It was a pleasure working with & getting to know Bryan & everyone at B&D Bluewater Builders. Honestly couldn't be happier with how everything turned out. I would highly recommend them!</p>
        <h6>Angela G., Raleigh NC</h6>
    </div>
  )
}

export default Testimonials