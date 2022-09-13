import React from 'react';

import classes from './Work.module.css';

import HeroImg from '../../../assets/Home/heroHome1.jpg';
import bathImg1 from '../../../assets/Work/baths1/bath 1.1.jpg';
import bathImg2 from '../../../assets/Work/baths1/bath 1.2.jpg';
import bathImg3 from '../../../assets/Work/baths1/bath 1.3.jpg';
import bathImg4 from '../../../assets/Work/baths1/bath 2.1.jpg';
import bathImg5 from '../../../assets/Work/baths1/bath 2.2.jpg';
import bathImg6 from '../../../assets/Work/baths1/bath 2.3.jpg';
import kitchenImg1 from '../../../assets/Work/kitchen1/kitchen1.jpg';
import kitchenImg2 from '../../../assets/Work/kitchen1/kitchen1.webp';
import kitchenImg3 from '../../../assets/Work/kitchen1/kitchen2.jpg';
import kitchenImg4 from '../../../assets/Work/kitchen1/kitchen-interior.jpg';
import kitchenImg5 from '../../../assets/Work/kitchen1/kitchen 2.1.jpg';
import kitchenImg6 from '../../../assets/Work/kitchen1/kitchen 2.2.jpg';
import homeImg1 from '../../../assets/Work/home1/home1.1.jpg';
import homeImg2 from '../../../assets/Work/home1/home 2.1.jpg';
import homeImg3 from '../../../assets/Work/home1/living-room1.webp';
import homeImg4 from '../../../assets/Work/home1/sunroom1.jpg';
import homeImg5 from '../../../assets/Work/home1/sunroom2.jpg';
import deckImg1 from '../../../assets/Work/decks1/deck1.jpg';
import deckImg2 from '../../../assets/Work/decks1/deck2.jpg';
import deckImg3 from '../../../assets/Work/decks1/deck3.jpg';
import deckImg4 from '../../../assets/Work/decks1/20200806_110624.jpg';
import roofImg1 from '../../../assets/Work/roofs/Resized_20200120_160252.jpeg';
import roofImg2 from '../../../assets/Work/roofs/Resized_20200124_111238.jpeg';
import roofImg3 from '../../../assets/Work/roofs/Resized_20200124_111312.jpeg';
import roofImg4 from '../../../assets/Work/roofs/Resized_20200323_181846.jpeg';
import roofImg5 from '../../../assets/Work/roofs/Resized_20200323_181947.jpeg';
import roofImg6 from '../../../assets/Work/roofs/roof1.jpg';


const Work = () => {
  return (
    <div className={classes.workWrapper}>
        <div className={classes.heroDiv}>
            <img src={HeroImg} alt='Constructed Home' />
            <div className={classes.hero_wu}>
                <h1>About Us</h1>
            </div>        
        </div> 

        <div className={classes.galleryDiv}>
            <div className={classes.galleryTop}>
                <h2>Our Work</h2>
                <div className={classes.line}></div>
            </div>
            <div className={classes.galleryBaths}>
                <div className={classes.galleryWU}>
                    <h3>Bathrooms</h3>
                </div>
                <div className={classes.galleryList}>
                    <img src={bathImg1} alt='bathroom' />
                    <img src={bathImg2} alt='bathroom' />
                    <img src={bathImg3} alt='bathroom' />
                    <img src={bathImg4} alt='bathroom' />
                    <img src={bathImg5} alt='bathroom' />
                    <img src={bathImg6} alt='bathroom' />
                </div>
            </div>
            <div className={classes.galleryKitchens}>
                <div className={classes.galleryWU}>
                    <h3>Kitchens</h3>
                </div>
                <div className={classes.galleryList}>
                    <img src={kitchenImg1} alt='kitchen' />
                    <img src={kitchenImg2} alt='kitchen' />
                    <img src={kitchenImg3} alt='kitchen' />
                    <img src={kitchenImg4} alt='kitchen' />
                    <img src={kitchenImg5} alt='kitchen' />
                    <img src={kitchenImg6} alt='kitchen' />
                </div>
            </div>
            <div className={classes.galleryHome}>
                <div className={classes.galleryWU}>
                    <h3>Interior Renovations</h3>
                </div>
                <div className={classes.galleryList}>
                    <img src={homeImg1} alt='interior home' />
                    <img src={homeImg2} alt='interior home' />
                    <img src={homeImg3} alt='interior home' />
                    <img src={homeImg4} alt='sunroom' />
                    <img src={homeImg5} alt='sunroom' />
                </div>
            </div>
            <div className={classes.galleryDecks}>
                <div className={classes.galleryWU}>
                    <h3>Decks</h3>
                </div>
                <div className={classes.galleryList}>
                    <img src={deckImg1} alt='deck' />
                    <img src={deckImg2} alt='deck' />
                    <img src={deckImg3} alt='deck' />
                    <img src={deckImg4} alt='deck' />
                </div>
            </div>
            <div className={classes.galleryRoofs}>
                <div className={classes.galleryWU}>
                    <h3>Roofs</h3>
                </div>
                <div className={classes.galleryList}>
                    <img src={roofImg1} alt='roof' />
                    <img src={roofImg2} alt='roof' />
                    <img src={roofImg3} alt='roof' />
                    <img src={roofImg4} alt='roof' />
                    <img src={roofImg5} alt='roof' />
                    <img src={roofImg6} alt='roof' />
                </div>
            </div>
        </div>




    </div>
  )
}

export default Work