import React from 'react';
import css from './Posts.module.css';
import Post from './Post/Post';

const Posts = () => {

    let posts = [
        {id: 1, likes: 10, message: "Hi"},
        {id: 2, likes: 99, message: "Hey, what are you doing here?"},
        {id: 3, likes: 16, message: "What are you doing"},
        {id: 4, likes: 1, message: "Nice"},
    ]

    return (
        <div className={css.my_post}>
            <h2>My post</h2>
            <div className={css.new_post}>
                <div><textarea ></textarea></div>
                <div><button>Add</button></div>
            </div>
            <div className={css.posts}>
                <Post text={posts[0].message} likes={posts[0].likes}/>
                <Post text={posts[1].message} likes={posts[1].likes}/>
                <Post text="Hey, what are you doing here?" likes="0"/>
                <Post text="Very cool image" likes="999"/>
            </div>
        </div>
    )
}

export default Posts;