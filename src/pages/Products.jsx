import React from 'react'
import {
  ProductHero,
  
  OurProducts,
} from '../components/Products'

import {
  Footer,
  Navbar,
} from '../components/eGator'


const Products = () => {
  return (
    <div>

      <Navbar />
      <ProductHero />
      <OurProducts />
      <Footer />

    </div>
  )
}

export default Products