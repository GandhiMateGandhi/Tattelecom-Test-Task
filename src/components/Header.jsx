import React, {useState} from 'react';
import {Menu} from 'semantic-ui-react'
import {Link} from "react-router-dom";

const Header = () => {
    const path = document.location.hash.replace(/#\//, '');

    const [active, setActive] = useState(path || 'users');

    const setActiveOnClick = (name) => {
        setActive(name);
    };

    return (
        <Menu pointing secondary size="large">
            <Menu.Item
                as={Link} to='/'
                name='users'
                active={active === 'users'}
                onClick={() => setActiveOnClick("users")}
            />
            <Menu.Item
                as={Link} to='/posts'
                name='posts'
                active={active === 'posts'}
                onClick={() => setActiveOnClick("posts")}
            />
            <Menu.Item
                as={Link} to='/albums'
                name='albums'
                active={active === 'albums'}
                onClick={() => setActiveOnClick("albums")}
            />
        </Menu>
    );
}

export default Header;