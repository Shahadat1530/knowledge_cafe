import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    const { title, cover, author, author_img, posted_date, reading_time, hashtags} = blog;
    return (
        <div>
            <img src={cover} alt={`Cover picture of title ${title}`} className='w-full h-[500px] object-cover rounded-md' />
            <div className='flex justify-between'>
                <div className='flex gap-6'>
                    <img src={author_img} alt="" className='w-14 rounded-full' />
                    <div>
                        <h4 className="text-2xl">{author}</h4>
                        <p>{posted_date}</p>
                    </div>
                </div>

                <div>
                    <span>{reading_time} min read</span>
                </div>
            </div>
            <h3 className="text-3xl">{title}</h3>
            <p>
                {
                    hashtags.map( (hash, idx) => <span key={idx}><a href=""> #{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;