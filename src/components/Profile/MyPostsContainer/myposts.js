import React from 'react';
import s from './myposts.module.css';
import Post from './Post/posts';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/Textarea";


const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {

    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="New Post" name="newPostText" component={Textarea} validate={[required, maxLength10]} />
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
};

const AddNewPostFormRedux = reduxForm ({form: 'ProfileAddNewPostForm'})(AddNewPostForm);

const Myposts = ({ addTextPost, profilePage}) => {

    const {posts} = profilePage;

    let i = 1;
    let postsElements =
        posts.map((p) =>
            <Post key={i++}
                  message={p.message}
                  likesCount={p.likesCount}
            />
        );

    let changeAddTextPost = (values) => addTextPost(values.newPostText);

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <AddNewPostFormRedux onSubmit={changeAddTextPost} />
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}


export default Myposts;