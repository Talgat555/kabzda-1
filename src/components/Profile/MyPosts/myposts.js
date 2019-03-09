import React from 'react';
import s from './myposts.module.css';
import Post from './Post/posts';
import { addPostActionCreator, updateNewPostTextActionCreator } from './../../../redux/profile-reducer';


const Myposts = ({ store }) => {

    const { posts, newPostText } = store.getState().profilePage;
    let i= 1;
    let postsElements =
      posts.map((p) =>
        <Post key={i++}
              message={p.message}
              likesCount={p.likesCount}
        />)

    let newPostElement = React.createRef();

    let addTextPost = () => {
      store.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
      let text = newPostElement.current.value
      store.dispatch(updateNewPostTextActionCreator(text));
    };

    return (
      <div className={s.postsBlock}>
          <h3>My posts</h3>
        <div>
          <div>
            <textarea 
              onChange={onPostChange} 
              ref={newPostElement} 
              placeholder='Enter your post'
              value={newPostText.text}/>
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