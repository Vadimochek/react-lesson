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
                { dialogs.map(data => <DialogItem name={data.name} id={data.id}/>)}
            </div>
            <div className={css.messages}>
                { messages.map( data => <Message message={data.message} />)}
            </div>
        </div>
    )
}

export default Dialogs;