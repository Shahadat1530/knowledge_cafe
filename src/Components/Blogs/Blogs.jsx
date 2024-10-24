import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleBookmarks, handleReadTime}) => {
    const [blogs,setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
        .then (res => res.json())
        .then (data => setBlogs(data))
    },[])

    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">Blogs:{blogs.length}</h1>

            {
                blogs.map( blog => <Blog
                    handleBookmarks = {handleBookmarks}
                    handleReadTime = {handleReadTime} 
                    key={blog.id} 
                    blog={blog}>
                        
                    </Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleBookmarks: PropTypes.func,
    handleReadTime: PropTypes.func,

}

export default Blogs;