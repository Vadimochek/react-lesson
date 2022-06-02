import React from 'react';
import css from './Posts.module.css';
import Post from './Post/Post';


const Posts = (props) => {
let postElem = React.createRef();

let addPost = () => {
    props.addPost();
}

let onPostChange = () => {
    let text = postElem.current.value;
    props.updatePostText(text);
}

    return (
        <div className={css.my_post}>
            <h2>My post</h2>
            <div className={css.new_post}>
                <div><textarea onChange={onPostChange} ref={postElem} value={props.postText} /></div>
                <div><button onClick={ addPost }>Add</button></div>
            </div>
            <div className={css.posts}>
                { props.posts.map( post => <Post text={post.message} likes={post.likes}/> )}
            </div>
        </div>
    )
}
  
export default Posts;