import React from 'react'
import './Intro.css'
import github from '../../img/github.png'
import linkedIn from '../../img/linkedin.png'
import instagram from '../../img/instagram.png'
import vector1 from '../../img/Vector1.png'
import vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import crown from '../../img/crown.png'
import glasses from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { useContext } from 'react'
import { themeContext } from '../../Context'
import { motion } from 'framer-motion'

const Intro = () => {
  const transition = {duration : 2, type : 'spring'}
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{color: darkMode? 'white': ''}}>Hi! I Am</span>
                <span>PEACE OLORUNTOBA</span>
                <span>CEO-Edge Tech</span>
                <span>Full-Stack Developer with high level of experience in web designing and development, and also a coding tutor, as I also learn Blockchain Technology</span>
            </div>
            <button className="button i-button">Hire me</button>
            <div className="i-icons">
              <img src={github} alt="/" />
              <img src={linkedIn} alt="/" />
              <img src={instagram} alt="/" />
            </div>
        </div>
        <div className="i-right">
          <img src={vector1} alt="" />
          <img src={vector2} alt="" />
          <img src={boy} alt="" />
          <motion.img initial={{left:'-36%'}} whileInView={{left:'-24%'}} transition={transition} src={glasses} alt="" />
          <motion.div initial={{top:'-4%', left:'74%'}} whileInView={{left:'68%'}} transition={transition} style={{top: '-4%', left:'68%'}} className='floating-div'>
            <FloatingDiv image={crown} txt1='Web' txt2='Developer' />
          </motion.div>
          <motion.div initial={{left:'9rem', top:'18rem'}} whileInView={{left:'0rem'}} transition={transition} style={{top: '18rem', left: '0rem'}} className='floating-div'>
            <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award' />
          </motion.div>
          {/* blur divs */}
          <div className="blur" style={{background: 'rgb(238 210 255)'}}></div>
          <div className="blur" style={{background: '#C1F5FF', top: '17rem', width:'21rem', height:'11rem', left:'-9rem'}}></div>
        </div>
    </div>
  )
}

export default Intro