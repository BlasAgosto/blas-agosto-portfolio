import React from 'react'
import { About, Footer, Header, Skills, Work } from './container/container_index'
import { Navbar } from './components/Navbar_index'
import './App.scss'

const App = () => {
  return (
		<div className='app'>
			<Navbar />
			<Header />
			<Skills />
			<About />
			<Work />
			<Footer />
			{/* <Testimonial /> */}
		</div>
	)
}

export default App