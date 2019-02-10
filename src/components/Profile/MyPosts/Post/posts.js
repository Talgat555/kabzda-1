import React from 'react';
import s from './posts.module.css';

  
const Post = (props) => {
    return (
      <div className={s.item}>
        <img src='https://hornews.com/images/news_large/c1d4b2b8ec608ea72764c5678816d5c9.jpg.pagespeed.ce.F3X__0vZO7.jpg'/>
        <div>{props.message}</div>
        <div>
          <span>like {props.likesCount}</span>
        </div>
      </div>
  );
}


export default Post;