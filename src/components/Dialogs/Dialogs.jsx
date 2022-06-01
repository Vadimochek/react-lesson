import React from 'react';
import css from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import WriteMessage from "./WriteMessage/WriteMessage";



const Dialogs = (props) => {
    return (
        <div className={css.dialogs}>
            <div className={css.dialogList}>
                { props.dialogs.map(data => <DialogItem name={data.name} id={data.id}/>)}
            </div>
            <div className={css.messages}>
                { props.messages.map( data => <Message message={data.message} />)}
            </div>
            <div className={css.write}>
                <WriteMessage />
            </div>
        </div>
    )
}

export default Dialogs;