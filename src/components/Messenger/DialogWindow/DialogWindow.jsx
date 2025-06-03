import React from 'react';
import DialogForm from './components/DialogForm';

const DialogWindow = (props) => {
    let messages = props.messages;
    return (
        <div>
            <div id='messagesList'>{messages.map(m => <div>{m.value}</div>)}</div>
            <DialogForm newMessageValue={props.newMessageValue} dispatch={props.dispatch}/>
        </div>
    )
}

export default DialogWindow;