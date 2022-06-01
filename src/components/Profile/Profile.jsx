import React from 'react';
import css from './Profile.module.css';
import Posts from './Posts/Posts'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className={css.profile}>
            <ProfileInfo/>
            <Posts posts={props.posts}/>
        </div>
    )
}

export default Profile;