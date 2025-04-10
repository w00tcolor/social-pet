let state = {
    profilePage: {
        postsArr: [
            {id: 'post1', author: 'John Doe', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', likesCount: '3'},
            {id: 'post2', author: 'Jane Smith', text: 'Nulla facilisi. Sed vel justo at velit commodo dictum.', likesCount: '10'},
            {id: 'post3', author: 'Mike Johnson', text: 'Proin vel turpis vel ligula lobortis auctor.', likesCount: '0'},
            {id: 'post4', author: 'Sarah Wilson', text: 'Mauris vulputate, dui a condimentum placerat, enim lectus bibendum velit.', likesCount: '4'}
            ],  
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
    },
    
}

export default state;