import React from 'react';
import {Item, Segment} from "semantic-ui-react";
import UserName from "../Users/UserName";
import PostForm from "./PostForm";


const Posts = ({ posts, users, setPostsCallBack, getNewPostId }) => {
    const renderPostsList = posts.map(post => {
        return (
            <Segment size='big' key={post.id}>
                <Item>
                    <Item.Content>
                        <Item>
                            <UserName userId={post.userId} users={users}/>
                        </Item>
                        <Item.Header as='h3'>
                            {post.title}
                        </Item.Header>
                        <Item.Description>
                            {post.body}
                        </Item.Description>
                    </Item.Content>
                </Item>
            </Segment>

        )
    })
    return (
        <Item.Group>
            <PostForm setPostsCallBack={setPostsCallBack} getNewPostId={getNewPostId}/>
            <Segment.Group>
                {renderPostsList}
            </Segment.Group>
        </Item.Group>
    );
}

export default Posts;