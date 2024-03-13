import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import SpaceContainer from '../components/SpaceContainer'
import Footer from '../components/Footer'

const Blog = () => {


  return (
    <>
      <Header />
      <SpaceContainer />
      <div className='min-h-screen'>
        <h1 className="text-4xl text-center leading-relaxed" style={{ fontFamily: "Montserrat" }} id="blog">
          Blog 
        </h1>

        <div>
          <h2 className='text-2xl font-bold p-4 text-center'>Coming soon</h2>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Blog