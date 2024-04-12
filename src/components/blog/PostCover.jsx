import React from 'react'

const PostCover = ({ blogPosts }) => {
    console.log(blogPosts);
    return (
        <>
            {blogPosts.map((post) => {
                const { title, coverImage, description, categories, slug, published } = post;
                return (
                    <div className='flex justify-center items-center flex-col w-3/4 mx-auto lg:w-1/3 lg:justify-start p-2 rounded-xl m-2 transition-all duration-700 ease-in-out hover:shadow-blue-600 hover:shadow-md'>
                        <a href={"/blog/" + slug}>
                            <div className='text-xl p-2 text-center font-bold'>{title}</div>
                            <img src={coverImage} className='h-40 w-40' alt="" />
                            <div className='text-lg m-2'>{description}</div>
                            <div className='flex justify-evenly items-center'>
                            <div className='text-gray-800 dark:text-slate-400 font-semibold'>{published}</div>
                                {categories.map((tag) => {
                                    return (
                                        <span className='p-2 my-2 text-lg border-2 border-blue-600 text-gray-600 dark:text-slate-300 rounded-xl'>
                                            {tag}
                                        </span>
                                    )
                                })}
                            </div>
                        </a>
                    </div>
                )
            })}
        </>
    )
}

export default PostCover