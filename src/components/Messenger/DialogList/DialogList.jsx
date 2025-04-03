import React from 'react';
import classes from './DialogList.module.css'

const DialogsList = () => {
    let dialogsList = [
        {id: 1, name: 'Иван'},
        {id: 2, name: 'Мария'},
        {id: 3, name: 'Петр'},
        {id: 4, name: 'Оля'}
    ]
    return (
        <ul>
            {dialogsList.map(d => <li className={classes.dialogLink} id={d.id}>{d.name}</li>)}
        </ul>
    )
}

export default DialogsList;