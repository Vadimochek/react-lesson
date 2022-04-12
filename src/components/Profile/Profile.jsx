import React from 'react';
import css from './Profile.module.css';
import Posts from './Posts/Posts'

const Profile = () => {
    return (
        <div className={css.content}>
            <div className={css.panorama}>
               <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
            </div>
            <div className={css.avatar}>
                <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80" />
            </div>
            <Posts />
        </div>
    )
}

export default Profile;