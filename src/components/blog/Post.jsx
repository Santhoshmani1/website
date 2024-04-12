import React from 'react'
import blogPosts from '../../data/blogPosts'
import Header from '../Header'
import Footer from '../Footer'
import SpaceContainer from '../SpaceContainer'

const Post = () => {

  const blogId = window.location.href.split("blog/")[1]
  const article = blogPosts.find(post => post.slug === blogId)
  setTimeout(() => {

    const articleBody = document.querySelector('.article-body')
    articleBody.innerHTML = article.body.content;

  }, 2000)

  return (
    <>
      <Header />
      <div className='dark:bg-gray-950 py-20 dark:text-slate-200'>
        <div className='flex justify-evenly items-center p-2'>
          <h2 className='text-3xl font-bold text-center text-blue-500'>{article.title}</h2>
          <a className='p-4 bg-gray-800 text-slate-200 hover:text-white border-2 hover:border-blue-600 hover:bg-black  rounded-xl ' target='_blank' rel='noreferrer' href={article.mediumLink}>Read on Medium.com</a>
        </div>
        <div className='article-body lg:w-3/5 mx-auto text-lg lg:text-xl text-white dark:text-slate-300'>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Post
