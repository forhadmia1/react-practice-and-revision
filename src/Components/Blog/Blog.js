import React from 'react';
import './Blog.css'

const Blog = (props) => {
    return (
        <div className='single'>
            <h2>{props.heading}</h2>
            <p>{props.author}</p>
        </div>
    );
};

export default Blog;