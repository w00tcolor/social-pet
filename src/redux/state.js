const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_VALUE = 'UPDATE_NEW_POST_VALUE'
const UPDATE_DIALOGS_FORM_VALUE = 'UPDATE_DIALOGS_FORM_VALUE'
const SEND_MESSAGE = 'SEND_MESSAGE'

let store = {
    _state: {
        profilePage: {
            postsArr: [
                {id: 'post1', author: 'John Doe', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', likesCount: '3'},
                {id: 'post2', author: 'Jane Smith', text: 'Nulla facilisi. Sed vel justo at velit commodo dictum.', likesCount: '10'},
                {id: 'post3', author: 'Mike Johnson', text: 'Proin vel turpis vel ligula lobortis auctor.', likesCount: '0'},
                {id: 'post4', author: 'Sarah Wilson', text: 'Mauris vulputate, dui a condimentum placerat, enim lectus bibendum velit.', likesCount: '4'}
                ], 
            newPostValue: '',
        },
        messagesPage: {
            dialogsArr: [
                {id: 1, name: 'Иван'},
                {id: 2, name: 'Мария'},
                {id: 3, name: 'Петр'},
                {id: 4, name: 'Оля'}
            ],      
            messagesArr: [
            {value: 'cool'},
            {value: 'bro'},
            {value: 'nice'},
            {value: 'well done'},
            ],
            newMessageValue: '',
        },
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('1234');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === 'ADD_POST') {
            let newPost = {
                id: 'post5', author: 'John Doe', text: `${this._state.profilePage.newPostValue}`, likesCount: '0'
            };
            this._state.profilePage.postsArr.push(newPost);
            this._state.profilePage.newPostValue = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE_NEW_POST_VALUE') {
            this._state.profilePage.newPostValue = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE_DIALOGS_FORM_VALUE') {
            this._state.messagesPage.newMessageValue = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'SEND_MESSAGE') {
            let mewMessage = {
                value: `${this._state.messagesPage.newMessageValue}`
            };
            this._state.messagesPage.messagesArr.push(mewMessage);
            this._state.messagesPage.newMessageValue = '';
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostValueActionCreator = (text) => ({type: UPDATE_NEW_POST_VALUE, newText: text});
export const updateDialogFormValueActionCreator = (text) => ({type: UPDATE_DIALOGS_FORM_VALUE, newText: text})
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export default store;