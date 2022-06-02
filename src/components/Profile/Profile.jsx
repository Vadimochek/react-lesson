import React from 'react';
import css from './Profile.module.css';
import Posts from './Posts/Posts'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className={css.profile}>
            <ProfileInfo/>
            <Posts posts={props.profile.posts} postText={props.profile.postText} addPost={props.addPost} updatePostText={props.updatePostText}/>
        </div>
    )
}

export default Profile;