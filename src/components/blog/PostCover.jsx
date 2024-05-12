const PostCover = ({ blogPosts }) => {
    return (
        <>
            {blogPosts.map((post) => {
                const { title, coverImage, description, categories, slug, published } = post;
                return (
                    <div key={slug} className='flex flex-col items-center justify-center w-3/4 p-2 m-2 mx-auto transition-all duration-700 ease-in-out border lg:w-1/3 lg:justify-start rounded-xl hover:shadow-blue-600 hover:shadow-md'>
                        <a href={"/blog/" + slug}>
                            <div className='p-2 text-xl font-bold text-center'>{title}</div>
                            <img src={coverImage} className='w-40 h-40' alt="" />
                            <div className='m-2 text-lg'>{description}</div>
                            <div className='flex items-center justify-evenly'>
                                <div className='font-semibold text-gray-800 dark:text-slate-400'>{published}</div>
                                {categories.map((tag, index) => {
                                    return (
                                        <span key={index} className='p-2 my-2 text-lg text-gray-600 border-2 border-blue-600 dark:text-slate-300 rounded-xl'>
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
