import React from 'react';
import {Item} from 'semantic-ui-react'
import '../App.scss'
import UserInfoModal from "./UserInfoModal";
import userImage from "../../img/user-image.png";

const UsersList = ({ users }) => {
    const renderUsersList = users.map(user => {
        return (
            <Item key={user.id}>
                <Item.Image size='tiny'
                            src={userImage}/>
                <Item.Content>
                    <Item.Header>{user.name} </Item.Header>
                    <Item.Meta>
                        <span>{user.username}</span>
                    </Item.Meta>
                    <Item.Description as='a'>
                        <UserInfoModal title="User info" data={user} icon={true}/>
                    </Item.Description>
                </Item.Content>

            </Item>
        )
    })

    return (
        <Item.Group divided className="UsersList">
            {renderUsersList}
        </Item.Group>
    );
}

export default UsersList;