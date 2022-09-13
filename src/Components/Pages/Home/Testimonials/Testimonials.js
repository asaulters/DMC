import React, {useState, useEffect, useRef} from 'react';

import testimonialData from './testimonialData.json';
import testData from './testimonialData.json';

import classes from './Testimonials.module.css';
import star from '../../../../assets/Home/25533.jpg';
import fourStar from '../../../../assets/Home/4-star-1'
import fiveStar from '../../../../assets/Home/5-star-2'

const Testimonials = (props) => {

const [index, setIndex] = useState(0);
const timeoutRef = useRef(null);

const resetTimeout = () =>{
  if(timeoutRef.current){
    clearTimeout(timeoutRef.current)
  }
}
useEffect(() => {
  resetTimeout();
  timeoutRef.current = setTimeout(
    () =>
      setIndex((prevIndex) => 
      prevIndex === testData.length -1 ? 0 : prevIndex +1),
      20000
  );
  return () => {
    resetTimeout();
  };
}, [index])
  

  return (
    <div className={classes.testimonialWrapper}>
        <div className={classes.stars}>
            {/* <img src={fourStar} alt='star' /> */}
            <img src={fiveStar} alt='star' />

        </div>

        <h2>{testData[index].heading}</h2>
        <p>{testData[index].description}</p>
        <h6>{testData[index].name}, {testData[index].location}</h6>
    </div>
  )
}

export default Testimonials