import React from 'react';
import style from './BlogPost.module.css';

const BlogPost = (props) => {
    return (
        <div className={style.blogPost}>
            <img src={props.blogPostImage} />
            <div className={style.blogPostTextPart}>
                <h1>{props.blogPostTitle}</h1>
                <p>{props.blogPostText}</p><br/>
                <p>{props.blogPostText2}</p>
            </div>
        </div> 
    )
}

export default BlogPost;