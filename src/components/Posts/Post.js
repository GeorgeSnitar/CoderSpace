import React from 'react';
import PostComment from './PostComment/PostComment';
import p from './Post.module.css';

class Post extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div className={p.post}>
                <h1>{this.props.title}</h1>
                <p>{this.props.postText}</p>
                <img src={this.props.image} />
                <PostComment />
            </div>
        )
    }
}

export default Post;
