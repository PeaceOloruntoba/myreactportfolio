import React from 'react'
import './Services.css'
import heart from "../../img/heartemoji.png"
import glass from "../../img/glasses.png"
import humble from "../../img/humble.png"
import Card from '../Card/Card'
import resume from './Peace_Oloruntoba_CV.pdf'
import { useContext } from 'react'
import { themeContext } from '../../Context'
import { motion } from 'framer-motion'

const Services = () => {
  const transition = {duration:2, type:'spring'}
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id='Services'>
        <div className="awesome">
            <span style={{color: darkMode? 'white': ''}}>My Awesome</span>
            <span>Services</span>
            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Tempora nostrum, est consequuntur voluptate fugit obcaecati p</span>
            <a href={resume} download>
              <button className="button s-button">Download CV</button>
            </a>
            <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
        </div>
        <div className="cards">
            <motion.div initial={{left:'25rem'}} whileInView={{left:'14rem'}} transition={transition} className="div" style={{left: '14rem'}}>
              <Card emoji={heart} heading={'Design'} detail={'Figma, Canva, Photoshop, Adobe, AdobeXD'} />
            </motion.div>
            <motion.div initial={{left:'2rem'}} whileInView={{left:'-4rem', top:'12rem'}} transition={transition} className="div" style={{top: '12rem', left: '-4rem'}}>
              <Card emoji={glass} heading={'Development'} detail={'HTML, CSS, JavaScript, Python, PHP, (with there frameworks)'} />
            </motion.div>
            <motion.div initial={{left:'20rem'}} whileInView={{left:'12rem', top:'19rem'}} transition={transition} className="div" style={{top: '19rem',left: '12rem'}}>
              <Card emoji={humble} heading={'Tutoring'} detail={'You can learn from us at Edge Tech, we train zeros to become heros'} />
            </motion.div>
            <div className="blur s-blur2" style={{background: 'var(--purple)'}}></div>
        </div>
    </div>
  )
}

export default Services