import React from 'react';
import s from './myposts.module.css';
import Post from './Post/posts';

  
const Myposts = () => {

    let posts = [
      { id:1, message: 'Hi, how are you?', likesCount:12},
      { id:1, message: 'It\'s my first post', likesCount:11 }
    ]

    let postsElements = posts
      .map((p) => <Post message={p.message} likesCount={p.likesCount} />)
    return (
      <div className={s.postsBlock}>
          <h3>My posts</h3>
        <div>
          <div>
            <textarea>New post</textarea>
          </div>
          <div>
            <button>Add post</button>
          </div>
        </div>
        <div  className={s.posts}>
          { postsElements }
        </div> 
      </div>
  );
}


export default Myposts;