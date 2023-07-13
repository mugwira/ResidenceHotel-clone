import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Special from './components/Special'
import Welcome from './components/Welcome'
import Amenities from './components/Amenities'

const Home = () => {
  return (
    <main>
      <Nav />
      <Hero />
      <Special />
      <Welcome />
      <Amenities />
    </main>
  )
}

export default Home