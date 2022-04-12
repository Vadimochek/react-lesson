import React from 'react';
import css from './Posts.module.css';
import Post from './Post/Post';

const Posts = () => {
    return (
        <div className={css.my_post}>
            <h2>My post</h2>
            <div className={css.new_post}>
                <div><textarea ></textarea></div>
                <div><button>Add</button></div>
            </div>
            <div className={css.posts}>
                <Post text="OMG!?" likes="10"/>
                <Post text="Hey, what are you doing here?" likes="0"/>
                <Post text="Very cool image" likes="999"/>
            </div>
        </div>
    )
}

export default Posts;