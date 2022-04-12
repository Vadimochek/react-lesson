import React from 'react';
import css from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path= '/dialogs/'+props.id;
    return (
        <div className={css.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


const Message = (props) => {
    return (
        <div className={css.messsage}>{props.message}</div>
    )
}


const Dialogs = (props) => {
    return (
        <div className={css.dialogs}>
            <div className={css.dialogList}>
                <DialogItem name='Lina' id='1'/>
                <DialogItem name='Vova' id='2'/>
                <DialogItem name='Egor' id='3'/>
                <DialogItem name='Lena' id='4'/>
            </div>
            <div className={css.messages}>
                <Message message='Hi'/>
                <Message message='Where are you?'/>
                <Message message='What are you doing'/>
                <Message message='Nice'/>
                <Message message='Nice'/>
            </div>
        </div>
    )
}

export default Dialogs;