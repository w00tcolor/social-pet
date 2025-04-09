import React from 'react';

const DialogWindow = (props) => {
    let messages = props.messages;
    return (
        <div>
            {messages.map(m => <div>{m.value}</div>)}
        </div>
    )
}

export default DialogWindow;