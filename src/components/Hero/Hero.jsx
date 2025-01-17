import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

import{motion} from 'framer-motion';
import NumberCounter from 'number-counter'


export default function Hero() {
  const transition = {type:'spring', duration:3}
  const mobile = window.innerWidth<=768 ?true:false;
  return (



    <div className='Hero' id='hero'>
      <div className='blur hero-blur'></div>
  <div className='Left-h'>

  <Header/>
  <div className='the-best-ad'>
    <motion.div
     initial={{left: mobile?'178px':'238px'}}
     whileInView={{left:'8px'}}
     transition={{...transition, type:'tween'}}
     

    ></motion.div>
    <span>the best fitness club in the town</span>
  </div>

  <div className='Hero-text'>
    <div>
      <span className='stroke-text'>shape </span>
      <span>your</span>
    </div>
    <div>
      <span>ideal body</span>
    </div>
    <div> <span>in here we will help you to shape and build your ideal body and live up your life with fullest </span>

    </div>
  </div>
  {/* figure */}

  <div className='Figure'>
    <div>
      <span>
      <NumberCounter end={140} start={100} delay='4' preFix='+'/>
      </span>
      <span>expert coaches</span>
    </div>
    <div>
      <span>
      <NumberCounter end={978} start={800} delay='4' preFix='+'/>
      </span>
      <span>member joined</span>
    </div>
    <div>
      <span>
      <NumberCounter end={50} start={0} delay='4' preFix='+'/>
      </span>
      <span>fitness programs</span>
    </div>
  </div>

  {/* button */}

  <div className='Hero-buttons'>
  <buttons className='btn'>Get Started</buttons>
  <buttons className='btn'>Learn More</buttons>
  </div>
  
  </div>

  <div className='Right-h'>
    <button className='btn'>Join Now</button>
    <motion.div 
    initial={{right:'-1rem'}}
    whileInView={{right:'4rem'}}
    transition={transition}
    
    className='heart-rate'>
      <img src={Heart} alt="" />
      <span>Heart Rate</span>
      <span>116bpm</span>
    </motion.div>
    {/* Hero imges*/}

    <img src={hero_image} alt=""className='hero-image' />
    <motion.img
     initial={{right:'11rem'}}
     whileInView={{right:'20rem'}}
     transition={transition}
       src={hero_image_back} alt=""className='hero-image-back'/>

    <motion.div initial={{right:'37px'}}
    whileInView={{right:'28px'}}
    transition={transition}
    className='calories'>
      <img src={Calories} alt="" />
     <div>
       <span>Calories burned</span>
      <span>220 Kcal</span>
      </div>
    </motion.div>

  </div>
      
    </div>
  )
}
