import React from 'react';
import s from './myposts.module.css';
import Post from './Post/posts';

  
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
      let action = {
        type:'ADD-POST'
      }
      store.dispatch(action);
    }

    let onPostChange = () => {
      let text = newPostElement.current.value
      let action = {
        type:'UPDATE-NEW-POST-TEXT',
        text: text
      }
      store.dispatch(action);
    };

    return (
      <div className={s.postsBlock}>
          <h3>My posts</h3>
        <div>
          <div>
            <textarea onChange={onPostChange} ref={newPostElement} value={newPostText.text}/>
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