import React from 'react';
import classes from './DialogList.module.css'

const DialogsList = (props) => {
    let dialogs = props.dialogs
    return (
        <ul>
            {dialogs.map(d => <li className={classes.dialogLink} id={d.id}>{d.name}</li>)}
        </ul>
    )
}

export default DialogsList;