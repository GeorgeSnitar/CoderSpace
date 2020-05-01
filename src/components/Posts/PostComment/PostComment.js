import React from 'react';
import style from './PostComment.module.css';

class PostComment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: [],
            form: {
                name: '',
                comment: ''
            }
        }
    }

    componentDidMount() {
        if (localStorage.getItem('state')) {
            this.setState({ ...JSON.parse(localStorage.getItem('state')) })
        }
    }

    addComment = () => {
        this.setState({
            comments: [
                ...this.state.comments,
                {
                    id: this.state.comments.length ? this.state.comments.reduce((p, c) => p.id > c.id ? p : c).id + 1 : 1,
                    name: this.state.form.name,
                    comment: this.state.form.comment,
                }
            ],
            form: {
                name: '',
                comment: " "
            }
        }, () => localStorage.setItem('state', JSON.stringify(this.state)))
    }

    removeComment = (id) => {
        this.setState({
            comments: this.state.comments.filter(comment => comment.id !== id)
        }, () => localStorage.setItem('state', JSON.stringify(this.state)))
    }

    handleChange = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        })
    }

    render() {
        return (
            <div>
                <div className={style.postComment}>
                    <label>Name <br /><input type='text'
                        value={this.state.form.name}
                        name="name"
                        placeholder="Your name ..."
                        onChange={this.handleChange} /></label>
                    <label>Comment <br /><textarea
                        name="comment"
                        value={this.state.form.comment}
                        placeholder="Comment here ..."
                        onChange={this.handleChange}></textarea></label>
                    <button onClick={this.addComment}>Add comment</button>
                </div>

                {this.state.comments.map(comment => <div className={style.Comment} key={comment.id}>
                    <div> <span>2020  {comment.id}.</span>
                        <strong>{comment.name} </strong><br />
                        <p> {comment.comment}</p>       </div>
                    <div> <button onClick={this.removeComment.bind(null, comment.id)}>Delete comment</button></div>
                </div>)}

            </div>
        )
    }
}

export default PostComment;