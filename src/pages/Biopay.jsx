import React from 'react'
import { HeroBiopay, Section2, Section3, Section4, Section5, Section6 } from '../components/Biopay'
import { Footer, Navbar } from '../components/eGator'

const Biopay = () => {

  return (
    <div>
<Navbar />
      <HeroBiopay />
      <Section2 />
      <Section3 />
      <Section4/>
      <Section5/>
      <Section6 />
      <Footer />
    </div>
  )
  
}

export default Biopay