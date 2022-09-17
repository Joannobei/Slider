import React from 'react'
import { Footer, Navbar } from '../components/eGator'
import { NotFoundComponent } from '../components/NotFound'

const NotFound = () => {
  return (
    <div> 
      <Navbar/>
      <NotFoundComponent />
      <Footer />
    </div>
  )
}

export default NotFound