import React from 'react';
import css from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div className={css.profileInfo}>
            <div className={css.panorama}>
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"/>
            </div>
            <div className={css.avatar}>
                <img
                    src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"/>
            </div>
            <div className={css.description}>
                <div className={css.name}>Колесников Вадим</div>
                <div className={css.personInfo}>Учусь на 3 курсе. Люблю овощи и котиков))
                А также фрукты</div>
            </div>
        </div>
    )
}

export default ProfileInfo;