import React from 'react';
import css from './Posts.module.css';
import Post from './Post/Post';

const Posts = (props) => {
let postElem = React.createRef();

let addPost = () => {
    let text = postElem.current.value;
    alert(text);
    // alert('hi')
}

    return (
        <div className={css.my_post}>
            <h2>My post</h2>
            <div className={css.new_post}>
                <div><textarea ref={postElem}></textarea></div>
                <div><button onClick={ addPost }>Add</button></div>
            </div>
            <div className={css.posts}>
                { props.posts.map( post => <Post text={post.message} likes={post.likes}/> )}
            </div>
        </div>
    )
}

export default Posts;