import React from 'react';
import PostComment from '../PostComment/PostComment';
import style from './Post.module.css';

class Post extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div className={style.post}>
                <div className={style.postText}>
                    <h1>{this.props.postTitle}</h1>
                    <p>{this.props.postText}</p>
                </div>
                <img src={this.props.postImage} />
                <PostComment />
            </div>
        )
    }
}

export default Post;
