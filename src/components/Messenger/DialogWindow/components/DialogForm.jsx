import React from 'react';
import { updateDialogFormValueActionCreator, sendMessageActionCreator } from '../../../../redux/state';
import { TextArea } from '../../../../styled/components';

const DialogForm = (props) => {
    const onDialogFormValueUpdate = (e) => {
        let text = e.target.value;
        props.dispatch(updateDialogFormValueActionCreator(text));
    }
    const sendMessage = () => {
        props.dispatch(sendMessageActionCreator())
    }
    return (
        <div>
            <label htmlFor="">
                <TextArea placeholder='Введите сообщение' onChange={onDialogFormValueUpdate} value={props.newMessageValue}></TextArea>
                <button onClick={sendMessage}>
                    Отправить
                </button>
            </label>
        </div>
    )
}

export default DialogForm;