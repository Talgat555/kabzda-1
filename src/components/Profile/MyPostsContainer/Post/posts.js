import React from 'react';
import s from './posts.module.css';

  
const Post = (props) => {
    return (
      <div className={s.item}>
        <img src='http://rusbody.com/forum/attachments/rusbody13268163616052.jpg'/>
        <div>{props.message}</div>
        <div>
          <span>like {props.likesCount}</span>
        </div>
      </div>
  );
}


export default Post;