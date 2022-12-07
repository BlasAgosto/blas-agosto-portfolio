import React from 'react'
import { motion } from 'framer-motion'

import { AppWrap } from '../../wrapper/wrapper_index'
import { images } from '../../constants/images_index'
import './Header.scss'

const scaleVariants = {
  whileInView: {
    scale: [0,1],
    opacity: [0,1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}
const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div 
      whileInView={{ x: [-100,0], opacity: [0,1] }}
      transition={{ duration: 1 }}
      className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            {/* <span>🦄</span> */}
            <div style={{ marginLeft: 20, marginRight: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Blas</h1>
            </div>
            {/* <span>🦄</span> */}
          </div>
          <div className="tag-cmp app_flex">
            <p className="p-text">Full Stack Developer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0,1] }}
        transition={{ duration: 1, delayChildren: 0.5 }}
        className="app__header-img"
      >
        {/* Blas Probably going to turn this off below */}
        {/* <img src={images.profile} alt="profile_bg"/> */}
        <motion.img
          whileInView={{ scale: [0, 1]}}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
          />
      </motion.div>

      <motion.div
      variant={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
      >
        {/*Blas change these images for the technologies I actually know  */}
        {[images.css, images.javascript, images.node, images.react, images.python, images.git].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home')