import React from 'react';

import DialogWindow from './DialogWindow/DialogWindow';
import DialogsList from './DialogList/DialogList';

const Messenger = (props) => {
    

    return (
        <div>
            <DialogsList dialogs={props.dialogs}/>
            <DialogWindow messages={props.messages}/>
        </div>
    )
}

export default Messenger;