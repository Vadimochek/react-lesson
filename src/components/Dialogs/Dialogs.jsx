import React from 'react';
import css from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={css.dialogs}>
            <div className={css.dialogList}>
                <div className={css.dialog}>
                     <NavLink to='/dialogs/1'>Vova</NavLink>
                </div>
                <div className={css.dialog}>
                    <NavLink to='/dialogs/2'>Denis</NavLink>
                </div>
                <div className={css.dialog + ' ' + css.active}>
                    <NavLink to='/dialogs/3'>Lina</NavLink>
                </div>
                <div className={css.dialog}>
                    <NavLink to='/dialogs/4'>Vadim</NavLink>
                </div>
            </div>
            <div className={css.messages}>
                <div className={css.messsage}>Hi!</div>
                <div className={css.messsage}>Where are you?</div>
                <div className={css.messsage}>What are you doing?</div>
                <div className={css.messsage}>Nice!</div>
            </div>
        </div>
    )
}

export default Dialogs;