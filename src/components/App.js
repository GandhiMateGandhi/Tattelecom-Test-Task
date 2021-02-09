import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from "./Header";
import Posts from "./Posts/Posts";
import AlbumsList from "./Albums/AlbumsList";
import UsersList from "./Users/UsersList";
import 'semantic-ui-css/semantic.min.css'
import {Container} from "semantic-ui-react";
import json from "../api/jsonPlaceholder";

const App = () => {
    const [users, setUsers] = useState([])
    const [posts, setPosts] = useState([])
    const [albums, setAlbums] = useState([])

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const users = await json.get('/users');
        setUsers(users.data)
        const posts = await json.get('/posts');
        setPosts(posts.data)
        const albums = await json.get('/albums');
        setAlbums(albums.data)
    }

    const setPostsCallBack = (data) => {
        setPosts(prev => {
            return [{ ...data }, ...prev]
        })
    }

    const getNewPostId = () => {
        return posts.length + 1;
    }

    return (
        <Container className="Container">
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route path="/" exact>
                        <UsersList users={users}/>
                    </Route>
                    <Route path="/posts">
                        <Posts posts={posts} users={users} s
                               etPostsCallBack={setPostsCallBack}
                               getNewPostId={getNewPostId}/>
                    </Route>
                    <Route path="/albums">
                        <AlbumsList albums={albums}/>
                    </Route>
                </div>
            </BrowserRouter>
        </Container>
    );
}

export default App;