import React from 'react';
import s from './PostView.module.css';

const PostView = (props) => {
    
    return (
        <div className={s.postView}>
            <img src={props.viewImage}/>
            <p>{props.viewText}</p>
        </div>
    )
}

export default PostView;