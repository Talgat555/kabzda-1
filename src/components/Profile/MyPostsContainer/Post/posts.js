import React from 'react';
import s from './posts.module.css';

  
const Post = (props) => {
    return (
      <div className={s.item}>
        <img src='https://whatsism.com/uploads/posts/2018-05/thumbs/1525374102_d6zl3om.jpg'/>
        <div>{props.message}</div>
        <div>
          <span>like {props.likesCount}</span>
        </div>
      </div>
  );
}


export default Post;