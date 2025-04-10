import React from 'react';

import DialogWindow from './DialogWindow/DialogWindow';
import DialogsList from './DialogList/DialogList';

const Messenger = (props) => {
    

    return (
        <div>
            <DialogsList dialogs={props.state.dialogsArr}/>
            <DialogWindow messages={props.state.messagesArr}/>
        </div>
    )
}

export default Messenger;