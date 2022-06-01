import React from 'react';
import css from './../Dialogs.module.css';

let message = React.createRef();

let addPost = () => {
    let text = message.current.value;
    alert(text);
}

const WriteMessage = (props) => {
    return (
        <div className={css.sms}>
            <h2>Write your message!</h2>
            <div><textarea ref={message}></textarea></div>
            <div>
                <button onClick={addPost}>Add</button>
            </div>
        </div>
    )
}

export default WriteMessage;