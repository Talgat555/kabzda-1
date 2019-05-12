import React from 'react';
import s from './myposts.module.css';
import Post from './Post/posts';

const Myposts = ({onPostChange, addTextPost, profilePage}) => {

    const {posts, newPostText} = profilePage;

    let i = 1;
    let postsElements =
        posts.map((p) =>
            <Post key={i++}
                  message={p.message}
                  likesCount={p.likesCount}
            />
        )

    let newPostElement = React.createRef();

    let changeAddTextPost = () => addTextPost();

    let handleChange = () => {
        let text = newPostElement.current.value;
        onPostChange(text);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
            <textarea
                className={s.textarea}
                onChange={handleChange}
                ref={newPostElement}
                placeholder='Enter your post'
                value={newPostText.text}
            />
                </div>
                <div>
                    <button
                        className={s.button}
                        onClick={changeAddTextPost}>
                        Add post
                    </button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}


export default Myposts;