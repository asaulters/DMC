import React, {useState, useEffect, useRef} from 'react';

import testimonialData from './testimonialData.json';
import testData from './testimonialData.json';

import classes from './Testimonials.module.css';
import star from '../../../../assets/Home/25533.jpg';
import fourStar from '../../../../assets/Home/4-star-1'
import fiveStar from '../../../../assets/Home/5-star-2'

const Testimonials = (props) => {

  const [testSlide, setTestSlide] = useState(0);

  
  const makeTimer = () =>{
    
    setInterval(() => {
      setTestSlide((testSlide) => testSlide++)
    }, 5000);
    console.log('add 1,', {testSlide} )
  }

  const resetTimer=() => {
    setTestSlide(0);
    makeTimer();
  }
  const resetTwo = () =>{
    
  }

  const scrollFunction = () =>{
    //check if index is < json.data
    console.log(testData.length)
    {testSlide < testData.length ? makeTimer() :setTestSlide(0) }
    //if greater, reset to 0

    //if not, add 1
  }

const testScroll =() =>{
  if( testSlide < testData.length){
    makeTimer();
  }else {
    resetTimer(0)
  }

}

  // if( testSlide < testData.length){
  //   setInterval(() => {
  //     setTestSlide((testSlide) => testSlide++)
  //   }, 5000);
  //   console.log('add 1,', {testSlide} )
    
  // } else{
  //   setTestSlide(0);
  //   setInterval(() => {
  //     setTestSlide((testSlide) => testSlide++)
  //   }, 5000);
  //   console.log('add 1,', {testSlide} )
  // };

  return (
    <div className={classes.testimonialWrapper}>
        <div className={classes.stars}>
            {/* <img src={fourStar} alt='star' /> */}
            <img src={fiveStar} alt='star' />

        </div>
        {/* {testSlide < testData.length? makeTimer() : resetTimer()} */}
        {/* {makeTimer()}; */}
        {/* {scrollFunction()} */}
        {testScroll()}
        <h2>{testData[testSlide].heading}</h2>
        <p>Absolutely love my new master bath! It was a pleasure working with & getting to know Bryan & everyone at B&D Bluewater Builders. Honestly couldn't be happier with how everything turned out. I would highly recommend them!</p>
        <h6>Angela G., Raleigh NC</h6>
    </div>
  )
}

export default Testimonials