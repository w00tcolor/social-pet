import React from 'react';

import DialogWindow from './DialogWindow/DialogWindow';
import DialogsList from './DialogList/DialogList';

const Messenger = () => {
    return (
        <div>
            <DialogsList />
            <DialogWindow />
        </div>
    )
}

export default Messenger;