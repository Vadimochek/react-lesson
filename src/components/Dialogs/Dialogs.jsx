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
    let dialogs = [
        {id: 1, name: "Lina"},
        {id: 2, name: "Vova"},
        {id: 3, name: "Egor"},
        {id: 4, name: "Lena"},
    ]

    let messages = [
        {id: 1, message: "Hi"},
        {id: 2, message: "Where are you?"},
        {id: 3, message: "What are you doing"},
        {id: 4, message: "Nice"},
    ]

    return (
        <div className={css.dialogs}>
            <div className={css.dialogList}>
                <DialogItem name={dialogs[0].name} id={dialogs[0].id}/>
                <DialogItem name={dialogs[1].name} id={dialogs[1].id}/>
                <DialogItem name='Egor' id='3'/>
                <DialogItem name='Lena' id='4'/>
            </div>
            <div className={css.messages}>
                <Message message={messages[0].message}/>
                <Message message={messages[1].message}/>
                <Message message={messages[2].message}/>
                <Message message='Nice'/>
                <Message message='Nice'/>
            </div>
        </div>
    )
}

export default Dialogs;