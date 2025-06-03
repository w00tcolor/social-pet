import React from 'react';

import DialogWindow from './DialogWindow/DialogWindow';
import DialogsList from './DialogList/DialogList';

const Messenger = (props) => {
    

    return (
        <div>
            <DialogsList dialogs={props.state.dialogsArr}/>
            <DialogWindow messages={props.state.messagesArr} newMessageValue={props.state.newMessageValue} dispatch={props.dispatch}/>
        </div>
    )
}

export default Messenger;