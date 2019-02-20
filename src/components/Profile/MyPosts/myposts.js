import React from 'react';
import s from './myposts.module.css';
import Post from './Post/posts';

  
const Myposts = ({ state, addPost, updateNewPostText }) => {

    const { posts, newPostText } = state;
    let postsElements = posts
      .map((p) => <Post message={p.message} likesCount={p.likesCount} />)

    let newPostElement = React.createRef();

    let addTextPost = () => {
      let text = newPostElement.current.value;
      addPost();
    }

    let onPostChange = () => {
      let text = newPostElement.current.value
      updateNewPostText(text);
    };

    return (
      <div className={s.postsBlock}>
          <h3>My posts</h3>
        <div>
          <div>
            <textarea onChange={onPostChange} ref={newPostElement} value={newPostText}/>
          </div>
          <div>
            <button onClick={addTextPost}>Add post</button>
          </div>
        </div>
        <div  className={s.posts}>
          { postsElements }
        </div> 
      </div>
    );
}


export default Myposts;