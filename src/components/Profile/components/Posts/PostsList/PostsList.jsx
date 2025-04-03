import React from 'react';
import classes from './PostsList.module.css';
import Post from './components/Post';

const PostsList = () => {

    let postsArr = [
        {id: '1', author: 'John Doe', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
        {id: '2', author: 'Jane Smith', text: 'Nulla facilisi. Sed vel justo at velit commodo dictum.'},
        {id: '3', author: 'Mike Johnson', text: 'Proin vel turpis vel ligula lobortis auctor.'},
        {id: '4', author: 'Sarah Wilson', text: 'Mauris vulputate, dui a condimentum placerat, enim lectus bibendum velit.'}
    ];

    return (
        <div className={classes.list}>
            {postsArr.map(p => 
                <Post 
                    id={p.id} 
                    content={p.text} 
                    author={p.author}
                />
            )}
        </div>
    )
}

export default PostsList;