const SEND_MESSAGE = 'SEND_MESSAGE'
const UPDATE_DIALOGS_FORM_VALUE = 'UPDATE_DIALOGS_FORM_VALUE'

const messengerReducer = (state, action) => {
    switch(action.type) {
        case SEND_MESSAGE:
            let mewMessage = {
                value: `${state.newMessageValue}`
            };
            state.messagesArr.push(mewMessage);
            state.newMessageValue = '';
            return state;
        case UPDATE_DIALOGS_FORM_VALUE:
            state.newMessageValue = action.newText;
            return state;
        default:
            return state;
    }
}

export const updateDialogFormValueActionCreator = (text) => ({type: UPDATE_DIALOGS_FORM_VALUE, newText: text})
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})

export default messengerReducer;