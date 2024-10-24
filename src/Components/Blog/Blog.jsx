import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleBookmarks }) => {
    const { title, cover, author, author_img, posted_date, reading_time, hashtags} = blog;
    return (
        <div className='mb-16 '>
            <img src={cover} alt={`Cover picture of title ${title}`} className='w-full h-[500px] object-cover rounded-md mb-8' />
            <div className='flex justify-between mb-4'>
                <div className='flex gap-6'>
                    <img src={author_img} alt="" className='w-14 rounded-full' />
                    <div className='space-y-1'>
                        <h4 className="text-2xl">{author}</h4>
                        <p>{posted_date}</p>
                    </div>
                </div>

                <div>
                    <span>{reading_time} min read</span>
                    <button 
                        onClick={handleBookmarks}
                        className='text-2xl ml-3 text-red-600'
                    ><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h3 className="text-3xl mb-2">{title}</h3>
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