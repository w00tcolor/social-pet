const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_VALUE = 'UPDATE_NEW_POST_VALUE'

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 'post5', author: 'John Doe', text: `${state.newPostValue}`, likesCount: '0'
            };
            state.postsArr.push(newPost);
            state.newPostValue = '';
            return state;
        case UPDATE_NEW_POST_VALUE:
            state.newPostValue = action.newText;
            return state;
        default:
            return state;

    };
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostValueActionCreator = (text) => ({type: UPDATE_NEW_POST_VALUE, newText: text});

export default profileReducer;