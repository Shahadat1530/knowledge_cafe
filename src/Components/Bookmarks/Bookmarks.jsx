import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-400 pt-4 mt-4 ml-2 rounded-xl">
            <div className='bg-purple-500 p-3 m-3 rounded-xl'>
                <h3 className="text-3xl font-bold bg-purple-200 p-2 rounded-xl">Spend Time:{readTime}</h3>
            </div>
           <h2 className="text-3xl text-center">Bookmarked Blogs:{bookmarks.length}</h2>
           {
            bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
           } 
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.object,
    readTime: PropTypes.number
}

export default Bookmarks;