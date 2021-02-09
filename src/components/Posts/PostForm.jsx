import React, {useState} from 'react';
import json from "../../api/jsonPlaceholder";
import {Form, Segment} from "semantic-ui-react";

const PostForm = ({ setPostsCallBack, getNewPostId }) => {
    const [post, setPost] = useState({
        userId: '',
        id: '',
        title: '',
        body: ''
    });

    const changeHandler = event => {
        setPost(prev => {
            return { ...prev, [event.target.name]: event.target.value, id: getNewPostId() }
        })
    }

    const userIdChangeHandler = (event) => {
        setPost((prev) => {
            return {
                ...prev,
                userId: +event.target.value
            };
        });
    };

    const submitHandler = async event => {
        event.preventDefault();
        setPost(prevState => ({ ...prevState, id: getNewPostId() + 1 }))

        const response = await json.post('/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: post.title,
                body: post.body,
                userId: post.userId,
                id: post.id
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        response.status === 201 ? setPostsCallBack(post) : alert('Something went wrong')
        console.log(post)
    }

    return (
        <Segment>
            <Form onSubmit={submitHandler}>
                <Form.Field>
                    <Form.Input onChange={userIdChangeHandler}
                                placeholder='UserID'
                                label='Enter user ID'
                                name='userId'
                                type='number'
                                value={post.userId}
                    />
                    <Form.Input onChange={changeHandler}
                                placeholder='Title'
                                label='Enter your post title'
                                name='title'
                                value={post.title}
                    />
                    <Form.Input onChange={changeHandler}
                                placeholder='Post text'
                                label='Enter your post text'
                                name='body'
                                value={post.body}
                    />
                    <Form.Button primary type='submit' content='Submit'/>
                </Form.Field>
            </Form>
        </Segment>
    );

}

export default PostForm;