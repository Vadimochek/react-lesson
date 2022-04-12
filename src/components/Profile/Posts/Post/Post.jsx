import React from 'react';
import css from './Post.module.css';

const Post = (props) => {
    return (
        <div className={css.item}>
            <img src="https://yt3.ggpht.com/a/AGF-l79GtpUANlkK4DUF5AZxkTXbF4bZtqo20ASMyA=s900-c-k-c0xffffffff-no-rj-mo" />
            {props.text}
            <div>
                <span>Like </span>
                <span>{props.likes}</span>
            </div>
        </div>

    )
}

export default Post;