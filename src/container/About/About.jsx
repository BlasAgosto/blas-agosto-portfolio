import React, {useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// import { images } from '../../constants/images_index'
import './About.scss'
import { urlFor, client } from '../../client'
import { AppWrap } from '../../wrapper/wrapper_index'

// const abouts = [
//   { title: 'Web Development', description: 'I am a good web dev boi', imgUrl: images.about01 },
//   { title: 'Web Design', description: 'I am a good web dev boi', imgUrl: images.about02 },
//   { title: 'UI/UX', description: 'I am a good web dev boi', imgUrl: images.about03 },
//   { title: 'Web Animations', description: 'I am a good web dev boi', imgUrl: images.about04 }
// ]

const About = () => {
  //Blas Might delete what is below me, It seems to heavily rely on the API calls and I don't know how to change those images just yet
  const [abouts, setAbouts] = useState([])

  useEffect(() => {
    const query = '*[_type == "abouts"]'

    client.fetch(query)
    .then((data) => {
      setAbouts(data)
    })
  },[])

  return (
    <>
    <h2 className="head-text">
      From
      <span>The Office</span>
      <br />
      To
      <span>The Fireside</span>
    </h2>
    <div className="app__profiles">
    {abouts.map((about, index) => (
      <motion.div
        whileInView={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5, type: 'tween' }}
        className="app__profile-item"
        key={about.title + index}
        >
          <img src={urlFor(about.imgUrl)} alt={about.title}/>
          <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
          <p className='p-text' style={{ marginTop: 10 }}>{about.description}</p>
      </motion.div>
    ))}
    </div>
    </>
  )
}

// export default AppWrap(
//   MotionWrap(About, 'app__about'),
//   'about',
//   "app__whitebg"
// )

export default AppWrap(About,'about')