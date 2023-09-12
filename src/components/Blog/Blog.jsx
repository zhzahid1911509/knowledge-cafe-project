import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    console.log(blog);
    const {title, cover, author, author_img, posted_date, hashtags, reading_time} = blog;

    return (
        <div>
            <img src={cover} alt={`Cover photo of the title ${title}`} />
            <h2 className='text-4xl'>{title}</h2>
            <div className='flex justify-between'>
                <div className='flex gap-4'>
                    <img className='w-12 rounded-full' src={author_img} alt="" />
                    <div>
                        <h3>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                </div>
            </div>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash} &nbsp; </a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;