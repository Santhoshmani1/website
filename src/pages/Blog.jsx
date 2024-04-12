import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import SpaceContainer from '../components/SpaceContainer'
import Footer from '../components/Footer'
import blogPosts from '../data/blogPosts'
import PostCover from "../components/blog/PostCover.jsx"
import '../styles/blogpost.css'

const Blog = () => {

  return (
    <>
      <Header />

      <div className='min-h-screen pt-12 dark:bg-gray-950 dark:text-slate-200'>
        <h1 className="text-4xl text-center pt-4 leading-relaxed" style={{ fontFamily: "Montserrat" }} id="blog">
          Blog
        </h1>
        <PostCover blogPosts={blogPosts} />
      </div>
      <Footer />
    </>

  )

}




export default Blog