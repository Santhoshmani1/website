const PostCover = ({ blogPosts }) => {
    return (
        <>
            {blogPosts.map((post) => {
                const { title, coverImage, description, categories, slug, published } = post;
                return (
                    <div key={slug} className='flex flex-col items-center justify-center p-4 m-4 font-sans transition-all duration-700 ease-in-out border border-gray-600 shadow md:w-2/5 lg:justify-start rounded-xl hover:shadow-blue-800 shadow-sky-400 hover:bg-slate-900'>
                        <a href={"/blog/" + slug} style={{fontFamily:"Open sans, sans-serif"}}>
                            <div className="flex flex-col sm:flex-row">
                                <img src={coverImage} className='w-40 h-40' alt="" />
                                <div className="flex flex-col p-2">
                                    <div className='p-2 text-xl text-center lg:text-2xl'>{title}</div>
                                    <div className='m-2 text-lg text-gray-300'>{description}</div>
                                </div>
                            </div>
                            <div className='flex items-center justify-evenly'>
                                <div className='text-gray-800 dark:text-slate-400'>{published}</div>
                                <div className="flex items-center justify-evenly">
                                    {categories.map((tag, index) => {
                                        return (
                                            <span key={index} className='mx-4 text-sm text-gray-600 border-blue-600 lg:text-lg dark:text-slate-300 rounded-xl'>
                                                {tag}
                                            </span>
                                        )
                                    })}
                                </div>
                            </div>
                        </a>
                    </div>
                )
            })}
        </>
    )
}

export default PostCover
