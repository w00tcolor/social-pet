import messengerReducer from "./messenger-reducer";
import profileReducer from "./profile-reducer";

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
        messengerPage: {
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
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messengerPage = messengerReducer(this._state.messengerPage, action)

        this._callSubscriber(this._state);
    }
}

export default store;