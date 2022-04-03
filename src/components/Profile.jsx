import React from 'react';
import css from './Profile.module.css';

const Profile = () => {
    return (
        <div className={css.content}>
            <div className={css.panorama}>
               <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
            </div>
            <div className={css.avatar}>
                <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80" />
            </div>
            <div className={css.my_post}>
                My post
                <div className={css.new_post}>
                    New post
                </div>
                <div className={css.posts}>
                    <div className={css.item}>
                        post 1
                    </div>
                    <div className={css.item}>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;