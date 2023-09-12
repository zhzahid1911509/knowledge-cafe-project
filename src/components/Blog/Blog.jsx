import PropTypes from 'prop-types';

const Blog = ({blog, handleBookmark, handleMarkAsRead}) => {
    //console.log(blog);
    const {id, title, cover, author, author_img, posted_date, hashtags, reading_time} = blog;

    return (
        <div className='mb-8'> 
            <img className='w-full mb-4' src={cover} alt={`Cover photo of the title ${title}`} />
            <h2 className='text-4xl mb-2'>{title}</h2>
            <div className='flex justify-between mb-2'>
                <div className='flex gap-4'>
                    <img className='w-12 rounded-full' src={author_img} alt="" />
                    <div>
                        <h3>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <span>{reading_time} min read</span>
                    <button className='cursor-pointer' onClick={()=>handleBookmark(blog)}><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 30 30">
                    <path d="M23,27l-8-7l-8,7V5c0-1.105,0.895-2,2-2h12c1.105,0,2,0.895,2,2V27z"></path>
                    </svg></button>
                </div>
            </div>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash} &nbsp; </a></span>)
                }
            </p>
            <button onClick={()=>handleMarkAsRead(id, reading_time)} className='text-purple-600 font-bold underline'>Mark as Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}

export default Blog;